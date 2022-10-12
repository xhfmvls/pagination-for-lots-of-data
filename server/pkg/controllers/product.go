package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/xhfmvls/pagination/pkg/models"
)

func GetPaginatedProductsList(w http.ResponseWriter, r *http.Request) {
	ProductsList := models.GetProducts(5, 5)
	res, _ := json.Marshal(ProductsList)
	w.Header().Set("content-type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}