Rails.application.routes.draw do
  scope '/api' do
      resources :farmers_market
    end
end
