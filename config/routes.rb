Rails.application.routes.draw do
  get 'projects' => "projects#index", as: "projects"
  get 'project' => "projects#show", as: "profile"
end



