require 'faraday'
require 'pry'

def apidata

  data = Faraday.get 'https://data.cityofnewyork.us/resource/94pk-v63f.json'
  parseddata = JSON.parse(data.body)
  parseddata.map do |market|
    FarmersMarket.create(facilityname: market["facilityname"], address: market["address"], borough: market["borough"], zipcode: market["zipcode"], monday: market["monday"], tuesday: market["tuesday"], wednesday: market["wednesday"], friday: market["friday"], saturday: market["saturday"], sunday: market["sunday"])
  end

end

apidata
