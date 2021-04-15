@reviews.each do |review|
  json.set! review.id do 
    json.partial! "api/reviews/review", review: review
    json.extract! review.author, :first_name, :last_name, :created_at, :updated_at
  end

end