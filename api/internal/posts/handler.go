package posts

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func RegisterPostRoutes(rg *gin.RouterGroup, s *Service) {
	post := rg.Group("/posts")
	{
		post.GET("/", func(ctx *gin.Context) {

			s.GetAll(ctx.Request.Context())
			ctx.JSON(http.StatusOK, gin.H{
				"message": "Hello from post",
				"data":    "data",
			})
		})
	}
}
