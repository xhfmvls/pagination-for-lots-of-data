package controllers

import (
	"encoding/json"
	"math"
	"net/http"

	"github.com/xhfmvls/pagination/pkg/middlewares"
	"github.com/xhfmvls/pagination/pkg/models"
)

type PageInfo struct {
	Size       int `json:"size"`
	Total      int `json:"total"`
	TotalPages int `json:"totalPages"`
	Current    int `json:"current"`
}

type APIResponse struct {
	Code int         `json:"code"`
	Data interface{} `json:"data"`
	Page PageInfo    `json:"pageinfo"`
}

func GetPaginatedProductsList(w http.ResponseWriter, r *http.Request) {
	limit := r.Context().Value(middlewares.LimitKey).(int)
	page := r.Context().Value(middlewares.PageKey).(int)
	offset := (page - 1) * limit
	ProductsList := models.GetProducts(limit, offset)
	var response APIResponse
	var pgInfo PageInfo

	pgInfo.Size = limit
	pgInfo.Current = page
	pgInfo.Total = models.GetSize()
	pgInfo.TotalPages = int(math.Ceil(float64(pgInfo.Total) / float64(pgInfo.Size)))

	response.Code = http.StatusOK
	response.Data = ProductsList
	response.Page = pgInfo

	res, _ := json.Marshal(response)
	w.Header().Set("content-type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
