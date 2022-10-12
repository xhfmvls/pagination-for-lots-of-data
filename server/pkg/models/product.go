package models

import (
	"time"

	"github.com/jinzhu/gorm"
	"github.com/xhfmvls/pagination/pkg/config"
)

type Product struct {
	ProductId    string    `json:product_id`
	ProductName  string    `json:product_name`
	Category      string    `json:category`
	BrandName    string    `json:brand_name`
	RetailPrice  float64   `json:retail_price`
	ActiveStatus bool      `json:active_status`
	CreatedAt    time.Time `json:created_at`
	UpdatedAt    time.Time `json:updated_at`
	DeletedAt    time.Time `json:deleted_at`
}

var db *gorm.DB

func init() {
	config.ConnectDB()
	db = config.GetDB()
	db.AutoMigrate(&Product{})
}

func GetProducts() []Product {
	var productsList *[]Product
	db.Limit(10).Find(&productsList)
	return *productsList
}