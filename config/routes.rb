Rails.application.routes.draw do
  scope '/api' do
      get :farmers_market, to: 'farmersmarket#index'
    end
end
