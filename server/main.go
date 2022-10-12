package main

import (
	"fmt"
	"github.com/xhfmvls/pagination/pkg/middlewares"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/joho/godotenv"
	"github.com/xhfmvls/pagination/pkg/controllers"
)

var NewRouter = func(router *mux.Router) {
	router.Handle("/product", middlewares.Pagination(http.HandlerFunc(controllers.GetPaginatedProductsList))).Methods("GET")
}

func main() {
	r := mux.NewRouter().PathPrefix("/api").Subrouter()
	godotenv.Load(".env")
	port, portEnvErr := strconv.Atoi(os.Getenv("PORT"))

	if portEnvErr != nil {
		panic("PORT not available")
	}

	NewRouter(r)
	http.Handle("/", r)
	fmt.Printf("Server Running on Port %d\n", port)
	address := fmt.Sprintf("localhost:%d", port)
	log.Fatal(http.ListenAndServe(address, r))
}
