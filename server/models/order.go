package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Product struct {
	Prod_ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Name        string             `json:"name,omitempty" bson:"name,omitempty"`
	Price       string             `json:"price,omitempty" bson:"price,omitempty"`
	Description string             `json:"description" bson:"description"`
	Country     string             `json:"country" bson:"country"`
	itemcode    string             `json:"itemcode" bson:"itemcode"`
}

type Customer struct {
	Cust_ID    primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	First_name string             `json:"first_name,omitempty" bson:"first_name,omitempty"`
	Last_name  string             `json:"last_name,omitempty" bson:"last_name,omitempty"`
	DOB        string             `json:"DOB,omitempty" bson:"dob,omitempty"`
	Address    string             `json:"address,omitempty" bson:"address,omitempty"`
}

type Order struct {
	Sale_ID  primitive.ObjectID `bson:"_id"`
	Product  primitive.ObjectID `bson:"product,omitempty"`
	Customer primitive.ObjectID `bson:"customer,omitempty"`
	Price    float64            `json:"price,omitempty"`
}
