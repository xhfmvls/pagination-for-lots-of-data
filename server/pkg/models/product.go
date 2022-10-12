package models

import (
	"github.com/jinzhu/gorm"
	"github.com/xhfmvls/pagination/pkg/config"
)

type Product struct {
	ProductId    string    `json:"product_id"`
	ProductName  string    `json:"product_name"`
	Category     string    `json:"category"`
	BrandName    string    `json:"brand_name"`
	RetailPrice  float64   `json:"retail_price"`
	ActiveStatus bool      `json:"active_status"`
}

var db *gorm.DB

func init() {
	config.ConnectDB()
	db = config.GetDB()
	db.AutoMigrate(&Product{})
}

func GetSize() int {
	count := 0
	db.Model(&Product{}).Count(&count)
	return count
}

func GetProducts(limit int, offset int) []Product {
	var productsList []Product
	db.Limit(limit).Offset(offset).Find(&productsList)
	return productsList
}