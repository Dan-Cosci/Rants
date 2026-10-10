package posts

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func RegisterPostRoutes(rg * gin.RouterGroup){
	post := rg.Group("/posts")
	{
		post.GET("/", func(ctx *gin.Context) {
			ctx.JSON(http.StatusOK, gin.H{
				"message": "Hello from post",
			})
		})
	}
}
