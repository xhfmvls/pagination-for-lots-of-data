package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/xhfmvls/pagination/pkg/middlewares"
	"github.com/xhfmvls/pagination/pkg/models"
)

func GetPaginatedProductsList(w http.ResponseWriter, r *http.Request) {
	limit := r.Context().Value(middlewares.LimitKey).(int)
	page := r.Context().Value(middlewares.PageKey).(int)
	offset := (page - 1) * limit
	ProductsList := models.GetProducts(limit, offset)
	res, _ := json.Marshal(ProductsList)
	w.Header().Set("content-type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}