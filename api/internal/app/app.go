package app

import (
	"github.com/Dan-Cosci/Rants/internal/config"
	"github.com/Dan-Cosci/Rants/internal/posts"

	"github.com/gin-gonic/gin"
)

func App(cfg *config.Config) (*gin.Engine, error) {
	r := gin.Default()

	api := r.Group("api/v1")
	posts.RegisterPostRoutes(api)

	return r, nil
}
