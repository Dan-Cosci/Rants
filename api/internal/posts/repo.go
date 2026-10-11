package posts

import (
	"context"
	"database/sql"
	"log"
	"time"
)

type Repo struct {
	db *sql.DB
}

func NewRepo(db *sql.DB) *Repo {
	return &Repo{db: db}
}

func (r *Repo) GetAll(ctx context.Context) {
	row, err := r.db.Query("SELECT * FROM rants")
	if err != nil {
		log.Fatal("Error getting data: " + err.Error())
		return
	}
	defer row.Close()
	for row.Next() {
		var name string
		var id int
		var date time.Time

		row.Scan(&id, &name, &date)
		println(date.Format("03:04:05 PM"))
	}

}
