package app

import (
	"github.com/Dan-Cosci/Rants/internal/config"
	"github.com/Dan-Cosci/Rants/internal/db"
	"github.com/Dan-Cosci/Rants/internal/posts"

	"github.com/gin-gonic/gin"
)

func App(cfg *config.Config) (*gin.Engine, error) {
	db := db.ConnectDB(cfg)

	r := gin.Default()

	postrepo := posts.NewRepo(db)
	postserv := posts.NewPostServ(postrepo)
	api := r.Group("api/v1")
	posts.RegisterPostRoutes(api, postserv)

	return r, nil
}
