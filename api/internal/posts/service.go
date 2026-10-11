package posts

import "context"

type Service struct {
	service *Repo
}

func NewPostServ(repo *Repo) *Service {
	return &Service{service: repo}
}

func (s *Service) GetAll(ctx context.Context) {
	s.service.GetAll(ctx)
}
