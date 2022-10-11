package database

import (
	"log"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	"github.com/xhfmvls/pagination-for-lots-of-data/models"
)
var Instance *gorm.DB
var err error

func Connect(connectionString string) {
	Instance, err = gorm.Open(mysql.Open(connectionString), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
		panic("[-] Cannot connect to DB")
	}
	log.Println("[+] Database Connected")
}

func Migrate(){	
	Instance.AutoMigrate(&models.Product{})
	log.Println("[+] Migration Completed")
}