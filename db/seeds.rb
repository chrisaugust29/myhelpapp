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
# american 
  bis1 = Business.create!(
    name: "Hall of Burgers",
    creator_id: 1,
    category: "American",
    street: "73 Cambon Dr",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "www.flameburgers.com",
    phone_number: "415-584-3058",
    state: "CA",
    price: "$$"
  )
  # a1 = open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1.jpg')
  # bis1.photos.attach(io: a1, filename: 'american_1.jpg')


  bis2 = Business.create!(
    name: "Hell's Kitchen",
    creator_id: 2,
    category: "American",
    street: "3570 Last Vegas Blvd S",
    city: "Las Vegas",
    zip_code: "89109",
    webpage: "japwww.caesars.com/",
    phone_number: "702-731-7373",
    state: "NV",
    price: "$$$$"
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
    price: "$"
  )

   bis4 = Business.create!(
    name: "Original Joe's",
    creator_id: 4,
    category: "American",
    street: "11 Genwood Ave",
    city: "San Francisco",
    zip_code: "93144",
    webpage: "orignaljoes.com",
    phone_number: "408-221-6327",
    state: "CA",
    price: "$$$"
  )

   bis5 = Business.create!(
    name: "Calibur",
    creator_id: 5,
    category: "American",
    street: "68 West Portal",
    city: "San Francisco",
    zip_code: "650-213-6520",
    webpage: "calibur.com",
    phone_number: "650-532-2247",
    state: "CA",
    price: "$"
  )

   bis6 = Business.create!(
    name: "Ginto",
    creator_id: 4,
    category: "Japanese",
    street: "658 Market St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "gintoexpress.com",
    phone_number: "707-583-3058",
    state: "CA",
    price: "$$"
  )

   bis7 = Business.create!(
    name: "Akikos",
    creator_id: 4,
    category: "Japanese",
    street: "431 Bush St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "akikos.com",
    phone_number: "415-397-3218",
    state: "CA",
    price: "$$$"
  )

   bis8 = Business.create!(
    name: "Rintaro",
    creator_id: 4,
    category: "Japanese",
    street: "82 14th St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "Rintaro.com",
    phone_number: "415-323-4118",
    state: "CA",
    price: "$$$"
  )

  bis8 = Business.create!(
    name: "Rintaro",
    creator_id: 4,
    category: "Japanese",
    street: "82 14th St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "Rintaro.com",
    phone_number: "415-323-4118",
    state: "CA",
    price: "$$$"
  )

   bis9 = Business.create!(
    name: "Grubbies",
    creator_id: 4,
    category: "Japanese",
    street: "123 2nd St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "Grubbies.com",
    phone_number: "415-323-4118",
    state: "CA",
    price: "$$"
  )

  bis10 = Business.create!(
    name: "Wako",
    creator_id: 4,
    category: "Japanese",
    street: "211 Clement St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "Wako.com",
    phone_number: "415-682-4338",
    state: "CA",
    price: "$$$$"
  )

   bis11 = Business.create!(
    name: "Top Hops",
    creator_id: 4,
    category: "Bar",
    street: "94 Orchard St",
    city: "New York",
    zip_code: "10848",
    webpage: "tophops.com",
    phone_number: "408-532-6147",
    state: "NY",
    price: "$$"
  )

   bis12 = Business.create!(
    name: "Arena SF",
    creator_id: 4,
    category: "Bar",
    street: "2565 Mission St",
    city: "SF",
    zip_code: "93241",
    webpage: "ArenaSF.com",
    phone_number: "650-273-7468",
    state: "CA",
    price: "$$$$"
  )

  bis13 = Business.create!(
    name: "Del Mar",
    creator_id: 4,
    category: "Bar",
    street: "2125 Lobard St",
    city: "SF",
    zip_code: "93241",
    webpage: "Delmar.com",
    phone_number: "415-344-7468",
    state: "CA",
    price: "$$$"
  )

   bis14 = Business.create!(
    name: "Lusk",
    creator_id: 4,
    category: "Bar",
    street: "25 Lusk St",
    city: "SF",
    zip_code: "93241",
    webpage: "Lusk.com",
    phone_number: "415-495-7468",
    state: "CA",
    price: "$$$"
  )

  bis15 = Business.create!(
    name: "Jaxson",
    creator_id: 4,
    category: "Bar",
    street: "321 Filmore St",
    city: "SF",
    zip_code: "93241",
    webpage: "Jaxson.com",
    phone_number: "415-925-7433",
    state: "CA",
    price: "$"
  )
  bis16 = Business.create!(
   name: "Sweetgreen",
    creator_id: 4,
    category: "Healthy",
    street: "11 E 3rd Ave",
    city: "San Mateo",
    zip_code: "650-753-6500",
    webpage: "order.sweetgreen.com",
    phone_number: "415-521-6147",
    state: "CA",
    price: "$"
  )

  bis17 = Business.create!(
   name: "Butter Lettuce",
    creator_id: 4,
    category: "Healthy",
    street: "2268 Chestnut St",
    city: "San Francisco",
    zip_code: "94532",
    webpage: "butterlettuce.com",
    phone_number: "415-521-6147",
    state: "CA",
    price: "$$"
  )

   bis18 = Business.create!(
    name: "Mixt",
    creator_id: 4,
    category: "Healthy",
    street: "3130 Filmore St",
    city: "San Francisco",
    zip_code: "94532",
    webpage: "Mixt.com",
    phone_number: "415-321-6147",
    state: "CA",
    price: "$"
  )

    bis19 = Business.create!(
    name: "Greens Place",
    creator_id: 4,
    category: "Healthy",
    street: "2 Marina Blvd",
    city: "San Francisco",
    zip_code: "94532",
    webpage: "green.com",
    phone_number: "415-222-3327",
    state: "CA",
    price: "$$$"
  )

    bis20 = Business.create!(
    name: "Kitiva",
    creator_id: 4,
    category: "Healthy",
    street: "2011 Mission St",
    city: "San Francisco",
    zip_code: "94532",
    webpage: "Kitava.com",
    phone_number: "415-112-3327",
    state: "CA",
    price: "$$$"
  )


  

  