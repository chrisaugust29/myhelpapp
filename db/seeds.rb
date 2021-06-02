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
    lat: '37.71781',
    lng: '-122.47386',
    info: 'Hamburgers, burgers, cheeseburgers, avocado, hot dogs, chilli cheese Fries, milkshakes',
    state: "CA",
    price: "$$"
  )
  a1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1.jpg')
  bis1.photos.attach(io: a1, filename: 'american_1.jpg')
  a1_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_1.jpg')
  bis1.photos.attach(io: a1_1, filename: 'american_1-1.jpg')
  a1_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_2.jpg')
  bis1.photos.attach(io: a1_2, filename: 'american_1-2.jpg')
  a1_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_3.jpg')
  bis1.photos.attach(io: a1_3, filename: 'american_1-3.jpg')
  a1_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_4.jpg')
  bis1.photos.attach(io: a1_4, filename: 'american_1-4.jpg')


  bis2 = Business.create!(
    name: "Hell's Kitchen",
    creator_id: 2,
    category: "American",
    street: "3570 Last Vegas Blvd S",
    city: "Las Vegas",
    zip_code: "89109",
    webpage: "japwww.caesars.com/",
    phone_number: "702-731-7373",
    lat: '39.75181',
    lng: '-120.04258',
    info: 'Loved the atmosphere and the strawberry pancake! I very much enjoyed the chill vibe hospitality of the service.',
    state: "NV",
    price: "$$$$"
  )

  a2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_2.jpg')
  bis2.photos.attach(io: a2, filename: 'american_2.jpg')
  a1_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_1.jpg')
  bis2.photos.attach(io: a1_1, filename: 'american_1-1.jpg')
  a1_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_2.jpg')
  bis2.photos.attach(io: a1_2, filename: 'american_1-2.jpg')
  a1_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_3.jpg')
  bis2.photos.attach(io: a1_3, filename: 'american_1-3.jpg')
  a1_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_4.jpg')
  bis2.photos.attach(io: a1_4, filename: 'american_1-4.jpg')

  bis3 = Business.create!(
    name: "Boiling Crab",
    creator_id: 3,
    category: "American",
    street: "1631 E Capitol Expy Ste",
    city: "San Jose",
    zip_code: "95121",
    webpage: "theboilingcrab.com",
    phone_number: "408-532-6147",
    lat: '37.30284',
    lng: '-121.86420',
    info: 'When you have that craving for a good seafood boil, Boiling Crab definitely hits! I feel like now more than ever is the best time to order.',
    state: "CA",
    price: "$"
  )

  a3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_3.jpg')
  bis3.photos.attach(io: a3, filename: 'american_3.jpg')
  a1_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_1.jpg')
  bis3.photos.attach(io: a1_1, filename: 'american_1-1.jpg')
  a1_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_2.jpg')
  bis3.photos.attach(io: a1_2, filename: 'american_1-2.jpg')
  a1_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_3.jpg')
  bis3.photos.attach(io: a1_3, filename: 'american_1-3.jpg')
  a1_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_4.jpg')
  bis3.photos.attach(io: a1_4, filename: 'american_1-4.jpg')

   bis4 = Business.create!(
    name: "Original Joe's",
    creator_id: 4,
    category: "American",
    street: "11 Genwood Ave",
    city: "San Francisco",
    zip_code: "93144",
    webpage: "orignaljoes.com",
    phone_number: "408-221-6327",
    lat: '37.71876',
    lng: '-122.48299',
    info: 'I went to this place thinking it was the fancy one, the restaurant mentioned frequently on craigslist. I was pleasantly surprised by the prices, for being such a high end restaurant. Offers reservations',
    state: "CA",
    price: "$$$"
  )
  a4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_4.jpg')
  bis4.photos.attach(io: a4, filename: 'american_4.jpg')
  a1_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_1.jpg')
  bis4.photos.attach(io: a1_1, filename: 'american_1-1.jpg')
  a1_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_2.jpg')
  bis4.photos.attach(io: a1_2, filename: 'american_1-2.jpg')
  a1_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_3.jpg')
  bis4.photos.attach(io: a1_3, filename: 'american_1-3.jpg')
  a1_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_4.jpg')
  bis4.photos.attach(io: a1_4, filename: 'american_1-4.jpg')


   bis5 = Business.create!(
    name: "Calibur",
    creator_id: 5,
    category: "American",
    street: "68 West Portal",
    city: "San Francisco",
    zip_code: "94111",
    webpage: "calibur.com",
    phone_number: "650-532-2247",
    lat: '37.75177',
    lng: '-122.46651',
    info: 'Took my Mom and Dad here for a late Mothers Day lunch. I couldnt take her on the weekend. It is my Dads favorite restaurant and my Mom loves it to',
    state: "CA",
    price: "$"
  )
  a5 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_5.jpg')
  bis5.photos.attach(io: a5, filename: 'american_5.jpg')
  a1_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_1.jpg')
  bis5.photos.attach(io: a1_1, filename: 'american_1-1.jpg')
  a1_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_2.jpg')
  bis5.photos.attach(io: a1_2, filename: 'american_1-2.jpg')
  a1_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_3.jpg')
  bis5.photos.attach(io: a1_3, filename: 'american_1-3.jpg')
  a1_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/american_1_4.jpg')
  bis5.photos.attach(io: a1_4, filename: 'american_1-4.jpg')



   bis6 = Business.create!(
    name: "Ginto",
    creator_id: 4,
    category: "Japanese",
    street: "658 Market St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "gintoexpress.com",
    phone_number: "707-583-3058",
    lat: '37.77661',
    lng: '-122.40282',
    info: 'Come eat some fresh sushi you will love this place in SF!',
    state: "CA",
    price: "$$"
  )

  a6 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_6.jpg')
  bis6.photos.attach(io: a6, filename: 'japanese_6.jpg')
  a6_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1_1.jpeg')
  bis6.photos.attach(io: a6_1, filename: 'japanese_1-1.jpg')
  a6_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/Japanese_1_2.jpeg')
  bis6.photos.attach(io: a6_2, filename: 'Japanese_1-2.jpg')
  a6_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japaese_1_3.jpeg')
  bis6.photos.attach(io: a6_3, filename: 'japaese_1-3.jpg')
  a6_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1-4.jpg')
  bis6.photos.attach(io: a6_4, filename: 'japanese_1-4.jpg')
 

   bis7 = Business.create!(
    name: "Akikos",
    creator_id: 4,
    category: "Japanese",
    street: "431 Bush St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "akikos.com",
    phone_number: "415-397-3218",
    lat: '37.79070',
    lng: '-122.40472',
    info: 'Feels like you are in japan! Fresh Fish everyday',
    state: "CA",
    price: "$$$"
  )
  a7 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_7.jpg')
  bis7.photos.attach(io: a7, filename: 'japanese_7.jpg')
  a6_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1_1.jpeg')
  bis7.photos.attach(io: a6_1, filename: 'japanese_1-1.jpg')
  a6_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/Japanese_1_2.jpeg')
  bis7.photos.attach(io: a6_2, filename: 'Japanese_1-2.jpg')
  a6_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japaese_1_3.jpeg')
  bis7.photos.attach(io: a6_3, filename: 'japaese_1-3.jpg')
  a6_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1-4.jpg')
  bis7.photos.attach(io: a6_4, filename: 'japanese_1-4.jpg')



   bis8 = Business.create!(
    name: "Rintaro",
    creator_id: 4,
    category: "Japanese",
    street: "82 14th St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "Rintaro.com",
    phone_number: "415-323-4118",
    lat: '37.76894',
    lng: '-122.41516',
    info: 'Sushi here is very fresh! I love it here would come back',
    state: "CA",
    price: "$$$"
  )

  a8 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_8.jpg')
  bis8.photos.attach(io: a8, filename: 'japanese_8.jpg')
  a6_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1_1.jpeg')
  bis8.photos.attach(io: a6_1, filename: 'japanese_1-1.jpg')
  a6_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/Japanese_1_2.jpeg')
  bis8.photos.attach(io: a6_2, filename: 'Japanese_1-2.jpg')
  a6_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japaese_1_3.jpeg')
  bis8.photos.attach(io: a6_3, filename: 'japaese_1-3.jpg')
  a6_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1-4.jpg')
  bis8.photos.attach(io: a6_4, filename: 'japanese_1-4.jpg')


   bis9 = Business.create!(
    name: "Grubbies",
    creator_id: 4,
    category: "Japanese",
    street: "123 2nd St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "Grubbies.com",
    phone_number: "415-323-4118",
    lat: '37.79439',
    lng: '-122.39943',
    info: 'Fresh Fish everyday!',
    state: "CA",
    price: "$$"
  )

  a9 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_9.jpg')
  bis9.photos.attach(io: a9, filename: 'japanese_9.jpg')
  a6_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1_1.jpeg')
  bis9.photos.attach(io: a6_1, filename: 'japanese_1-1.jpg')
  a6_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/Japanese_1_2.jpeg')
  bis9.photos.attach(io: a6_2, filename: 'Japanese_1-2.jpg')
  a6_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japaese_1_3.jpeg')
  bis9.photos.attach(io: a6_3, filename: 'japaese_1-3.jpg')
  a6_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1-4.jpg')
  bis9.photos.attach(io: a6_4, filename: 'japanese_1-4.jpg')


  bis10 = Business.create!(
    name: "Wako",
    creator_id: 4,
    category: "Japanese",
    street: "211 Clement St",
    city: "San Francisco",
    zip_code: "94104",
    webpage: "Wako.com",
    phone_number: "415-682-4338",
    lat: '37.78314',
    lng: '-122.46152',
    info: 'Best Sushi in SF come grab your OMAKASE!',
    state: "CA",
    price: "$$$$"
  )
    a10 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_10.jpg')
    bis10.photos.attach(io: a10, filename: 'japanese_10.jpg')
     a6_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1_1.jpeg')
    bis10.photos.attach(io: a6_1, filename: 'japanese_1-1.jpg')
    a6_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/Japanese_1_2.jpeg')
    bis10.photos.attach(io: a6_2, filename: 'Japanese_1-2.jpg')
    a6_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japaese_1_3.jpeg')
    bis10.photos.attach(io: a6_3, filename: 'japaese_1-3.jpg')
    a6_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/japanese_1-4.jpg')
    bis10.photos.attach(io: a6_4, filename: 'japanese_1-4.jpg')


   bis11 = Business.create!(
    name: "Top Hops",
    creator_id: 4,
    category: "Bar",
    street: "94 Orchard St",
    city: "New York",
    zip_code: "10848",
    webpage: "tophops.com",
    phone_number: "408-532-6147",
    lat: '40.71806',
    lng: '-73.98823',
    info: 'Beers, food and more!',
    state: "NY",
    price: "$$"
  )
    a11 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_11.jpg')
    bis11.photos.attach(io: a11, filename: 'bar_11.jpg')
    a11_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_1.jpeg')
    bis11.photos.attach(io: a11_1, filename: 'bar_1-1.jpg')
    a11_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_2.jpeg')
    bis11.photos.attach(io: a11_2, filename: 'bar_1-2.jpg')
    a11_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_3.jpeg')
    bis11.photos.attach(io: a11_3, filename: 'bar_1-3.jpg')
    a11_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_4.jpeg')
    bis11.photos.attach(io: a11_4, filename: 'bar_1_4.jpeg')
   

   bis12 = Business.create!(
    name: "Arena SF",
    creator_id: 4,
    category: "Bar",
    street: "2565 Mission St",
    city: "San Francisco",
    zip_code: "93241",
    webpage: "ArenaSF.com",
    phone_number: "650-273-7468",
    lat: '37.75633',
    lng: '-122.41850',
    info: 'Come and dance with ABGs, drink some beer relax!',
    state: "CA",
    price: "$$$$"
  )
    a12 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_12.jpg')
    bis12.photos.attach(io: a12, filename: 'bar_12.jpg')
    a11_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_1.jpeg')
    bis12.photos.attach(io: a11_1, filename: 'bar_1-1.jpg')
    a11_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_2.jpeg')
    bis12.photos.attach(io: a11_2, filename: 'bar_1-2.jpg')
    a11_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_3.jpeg')
    bis12.photos.attach(io: a11_3, filename: 'bar_1-3.jpg')
    a11_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_4.jpeg')
    bis12.photos.attach(io: a11_4, filename: 'bar_1_4.jpeg')
   

  bis13 = Business.create!(
    name: "Del Mar",
    creator_id: 4,
    category: "Bar",
    street: "2125 Lobard St",
    city: "San Francisco",
    zip_code: "93241",
    webpage: "Delmar.com",
    phone_number: "415-344-7468",
    lat: '37.79984',
    lng: '-122.43648',
    info: 'Fun an relaxing enviroment stress free!',
    state: "CA",
    price: "$$$"
  )
  a13 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_13.jpg')
  bis13.photos.attach(io: a13, filename: 'bar_13.jpg')
   a11_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_1.jpeg')
    bis13.photos.attach(io: a11_1, filename: 'bar_1-1.jpg')
    a11_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_2.jpeg')
    bis13.photos.attach(io: a11_2, filename: 'bar_1-2.jpg')
    a11_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_3.jpeg')
    bis13.photos.attach(io: a11_3, filename: 'bar_1-3.jpg')
    a11_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_4.jpeg')
    bis13.photos.attach(io: a11_4, filename: 'bar_1_4.jpeg')
   

   bis14 = Business.create!(
    name: "Lusk",
    creator_id: 4,
    category: "Bar",
    street: "25 Lusk St",
    city: "San Francisco",
    zip_code: "93241",
    webpage: "Lusk.com",
    phone_number: "415-495-7468",
    lat: '37.79582',
    lng: '-122.39649',
    info: 'Enjoy a beer on us buy one get one free',
    state: "CA",
    price: "$$$"
  )

    a14 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_14.jpg')
    bis14.photos.attach(io: a14, filename: 'bar_14.jpg')
     a11_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_1.jpeg')
    bis14.photos.attach(io: a11_1, filename: 'bar_1-1.jpg')
    a11_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_2.jpeg')
    bis14.photos.attach(io: a11_2, filename: 'bar_1-2.jpg')
    a11_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_3.jpeg')
    bis14.photos.attach(io: a11_3, filename: 'bar_1-3.jpg')
    a11_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_4.jpeg')
    bis14.photos.attach(io: a11_4, filename: 'bar_1_4.jpeg')
   

  bis15 = Business.create!(
    name: "Jaxson",
    creator_id: 4,
    category: "Bar",
    street: "321 Filmore St",
    city: "San Francisco",
    zip_code: "93241",
    webpage: "Jaxson.com",
    phone_number: "415-925-7433",
    lat: '37.79967',
    lng: '-122.43623',
    info: 'Fun country bar to drink with friends', 
    state: "CA",
    price: "$"
  )

    a15 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_15.jpg')
    bis15.photos.attach(io: a15, filename: 'bar_15.jpg')
     a11_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_1.jpeg')
    bis15.photos.attach(io: a11_1, filename: 'bar_1-1.jpg')
    a11_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_2.jpeg')
    bis15.photos.attach(io: a11_2, filename: 'bar_1-2.jpg')
    a11_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_3.jpeg')
    bis15.photos.attach(io: a11_3, filename: 'bar_1-3.jpg')
    a11_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/bar_1_4.jpeg')
    bis15.photos.attach(io: a11_4, filename: 'bar_1_4.jpeg')
   

  bis16 = Business.create!(
   name: "Sweetgreen",
    creator_id: 4,
    category: "Healthy",
    street: "11 E 3rd Ave",
    city: "San Mateo",
    zip_code: "650-753-6500",
    webpage: "order.sweetgreen.com",
    phone_number: "415-521-6147",
    lat: '37.56350',
    lng: '-122.32603',
    info: 'Eat a bowl of salad and be healthy!',
    state: "CA",
    price: "$"
  )
    a16 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_16.jpg')
    bis16.photos.attach(io: a16, filename: 'healthy_16.jpg')
    a16_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_1.jpeg')
    bis16.photos.attach(io: a16_1, filename: 'healthy_1_1.jpg')
    a16_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_2.jpeg')
    bis16.photos.attach(io: a16_2, filename: 'healthy_1_2.jpg')
    a16_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_3.jpeg')
    bis16.photos.attach(io: a16_3, filename: 'healthy_1_3.jpg')
    a16_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_4.jpeg')
    bis16.photos.attach(io: a16_4, filename: 'healthy_1_4.jpeg')

  bis17 = Business.create!(
   name: "Butter Lettuce",
    creator_id: 4,
    category: "Healthy",
    street: "2268 Chestnut St",
    city: "San Francisco",
    zip_code: "94532",
    webpage: "butterlettuce.com",
    phone_number: "415-521-6147",
    lat: '37.80059',
    lng: '-122.44072',
    info: 'good for your soul!',
    state: "CA",
    price: "$$"
  )
    a17 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_17.jpg')
    bis17.photos.attach(io: a17, filename: 'healthy_17.jpg')
     a16_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_1.jpeg')
    bis17.photos.attach(io: a16_1, filename: 'healthy_1_1.jpg')
    a16_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_2.jpeg')
    bis17.photos.attach(io: a16_2, filename: 'healthy_1_2.jpg')
    a16_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_3.jpeg')
    bis17.photos.attach(io: a16_3, filename: 'healthy_1_3.jpg')
    a16_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_4.jpeg')
    bis17.photos.attach(io: a16_4, filename: 'healthy_1_4.jpeg')

   bis18 = Business.create!(
    name: "Mixt",
    creator_id: 4,
    category: "Healthy",
    street: "3130 Filmore St",
    city: "San Francisco",
    zip_code: "94532",
    webpage: "Mixt.com",
    phone_number: "415-321-6147",
    lat: '37.79877',
    lng: '-122.43561',
    info: 'Chipotle bar, nah salad bar!',
    state: "CA",
    price: "$"
  )
    a18 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_18.jpg')
    bis18.photos.attach(io: a18, filename: 'healthy_18.jpg')
     a16_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_1.jpeg')
    bis18.photos.attach(io: a16_1, filename: 'healthy_1_1.jpg')
    a16_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_2.jpeg')
    bis18.photos.attach(io: a16_2, filename: 'healthy_1_2.jpg')
    a16_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_3.jpeg')
    bis18.photos.attach(io: a16_3, filename: 'healthy_1_3.jpg')
     a16_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_4.jpeg')
    bis18.photos.attach(io: a16_4, filename: 'healthy_1_4.jpeg')

    bis19 = Business.create!(
    name: "Greens Place",
    creator_id: 4,
    category: "Healthy",
    street: "2 Marina Blvd",
    city: "San Francisco",
    zip_code: "94532",
    webpage: "green.com",
    phone_number: "415-222-3327",
    lat: '37.80553',
    lng: '-122.43246',
    info: 'I am greener than money, salad is wealth!',
    state: "CA",
    price: "$$$"
  )
    a19 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_19.jpg')
    bis19.photos.attach(io: a19, filename: 'healthy_19.jpg')  
     a16_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_1.jpeg')
    bis19.photos.attach(io: a16_1, filename: 'healthy_1_1.jpg')
    a16_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_2.jpeg')
    bis19.photos.attach(io: a16_2, filename: 'healthy_1_2.jpg')
    a16_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_3.jpeg')
    bis19.photos.attach(io: a16_3, filename: 'healthy_1_3.jpg')
    a16_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_4.jpeg')
    bis19.photos.attach(io: a16_4, filename: 'healthy_1_4.jpeg')

    bis20 = Business.create!(
    name: "Kitiva",
    creator_id: 4,
    category: "Healthy",
    street: "2011 Mission St",
    city: "San Francisco",
    zip_code: "94532",
    webpage: "Kitava.com",
    phone_number: "415-112-3327",
    lat: '37.76495',
    lng: '-122.41948',
    info: 'Please come..',
    state: "CA",
    price: "$$$"
  )
    a20 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_20.jpg')
    bis20.photos.attach(io: a20, filename: 'healthy_20.jpg')  
   a16_1 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_1.jpeg')
    bis20.photos.attach(io: a16_1, filename: 'healthy_1_1.jpg')
    a16_2 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_2.jpeg')
    bis20.photos.attach(io: a16_2, filename: 'healthy_1_2.jpg')
    a16_3 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_3.jpeg')
    bis20.photos.attach(io: a16_3, filename: 'healthy_1_3.jpg')
    a16_4 = URI.open('https://helpapp-img.s3-us-west-1.amazonaws.com/healthy_1_4.jpeg')
    bis20.photos.attach(io: a16_4, filename: 'healthy_1_4.jpeg')
  
    # reviews 
Review.create!(
  body: "I loved the food here amazing",
  rating: 4,
  business_id: bis1.id,
  author_id: demo.id,
)
Review.create!(
  body: "awesome",
  rating: 4,
  business_id: bis1.id,
  author_id: user2.id,
)
Review.create!(
  body: "My job is yelping i think food is good here.",
  rating: 3,
  business_id: bis1.id,
  author_id: user1.id,
)
Review.create!(
  body: "This is a great new restaurant. ",
  rating: 3,
  business_id: bis2.id,
  author_id: demo.id,
)

Review.create!(
  body: "it was OK",
  rating: 4,
  business_id: bis1.id,
  author_id: user3.id,
)