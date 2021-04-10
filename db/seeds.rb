# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Business.destroy_all

ActiveRecord::Base
  .connection
  .tables
  .each { |t| ActiveRecord::Base.connection.reset_pk_sequence!(t) } 
# Users
   
  user1 = User.create!(
    username: "ChrisJuan",  
    first_name: "Chris",
    last_name: "Low",
    email: "christopher.ck.low@gmail.com",
    password: '123456'
  )

   user2 = User.create!(
    username: "Samskeeez",  
    first_name: "Samantha",
    last_name: "Waglizzy",
    email: "bad@gmail.com",
    password: 'sam123'
  )
  
  user3 = User.create!(
    username: "numba3",  
    first_name: "Max",
    last_name: "Lee",
    email: "maxlee12@gmail.com",
    password: 'max123'
  )

  user4 = User.create!(
    username: "Trey95",  
    first_name: "Trey",
    last_name: "Nelson",
    email: "tnel123@gmail.com",
    password: 'trey123'
  )

  demo = User.create!(
    username: "Demothehelper",  
    first_name: "Demo",
    last_name: "Thehelper",
    email: "demo123@gmail.com",
    password: 'password'
  )

  bis1 = Business.create!(
    name: "Ginto",
    creator_id: 1,
    category: "Japanese",
    street: "658 Market St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "www.gintoexpress.com",
    phone_number: "707-583-3058",
    state: "CA",
    price: 2
  )

  bis2 = Business.create!(
    name: "Gordon Ramsays Hell's Kitchen",
    creator_id: 2,
    category: "American",
    street: "3570 Last Vegas Blvd S",
    city: "Las Vegas",
    zip_code: "89109",
    webpage: "https://www.caesars.com/caesars-palace/restaurants/hells-kitchen",
    phone_number: "702-731-7373",
    state: "NV",
    price: 4
  )

  bis3 = Business.create!(
    name: "Boiling Crab",
    creator_id: 3,
    category: "American",
    street: "1631 E Capitol Expy Ste",
    city: "San Jose",
    zip_code: "95121",
    webpage: "theboilingcrab.com",
    phone_number: "408-532-6147",
    state: "CA",
    price: 1
  )

   bis4 = Business.create!(
    name: "Top Hops",
    creator_id: 4,
    category: "Bar",
    street: "94 Orchard St",
    city: "New York",
    zip_code: "10848",
    webpage: "tophops.com",
    phone_number: "408-532-6147",
    state: "NY",
    price: 2
  )

   bis5 = Business.create!(
    name: "Sweetgreen",
    creator_id: 5,
    category: "Healthy",
    street: "11 E 3rd Ave",
    city: "San Mateo",
    zip_code: "650-753-6500",
    webpage: "order.sweetgreen.com",
    phone_number: "408-532-6147",
    state: "CA",
    price: 1
  )