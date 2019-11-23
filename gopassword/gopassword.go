package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"log"
	"math/rand"
	"net/http"
)

type Password struct {
	Password string
}

func main() {

	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/gopassword", gopassword)

	log.Fatal(http.ListenAndServe(":8083", router))

}

func gopassword(w http.ResponseWriter, r *http.Request) {
	password := Password{Password: generator()}
	json.NewEncoder(w).Encode(password)

}

func generator() string {
	generated := ""
	for i := 0; i < 15; i++ {
		generated += string(rune(rand.Intn(94) + 33))
	}
	return generated
}
