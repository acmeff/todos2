Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :todos, except: [:edit, :new]
  end

  root to: "static_pages#root"

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
