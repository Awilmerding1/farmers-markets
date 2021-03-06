# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_30_163119) do

  create_table "farmers_markets", force: :cascade do |t|
    t.string "facilityname"
    t.string "address"
    t.string "borough"
    t.string "zipcode"
    t.string "monday", default: ""
    t.string "tuesday", default: ""
    t.string "wednesday", default: ""
    t.string "thursday", default: ""
    t.string "friday", default: ""
    t.string "saturday", default: ""
    t.string "sunday", default: ""
  end

  create_table "grocery_items", force: :cascade do |t|
    t.string "description"
    t.integer "farmers_market_id"
  end

end
