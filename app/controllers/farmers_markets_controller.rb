
class FarmersMarketsController < ApplicationController

  def index
      render(
        status: 200,
        json: FarmersMarket.all
      )
  end

  def create
    market = FarmersMarket.create(market_params)
  end

  def market_params
    params.require(:farmers_market).permit(:facilityname, :address, :borough, :zipcode, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday)
  end


end
