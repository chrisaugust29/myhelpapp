@businesses.each do |business|
  json.set! business.id do
    # json.partial! "api/businesses/business", business: business
    # json.photoUrls business.photos.map { |file| url_for(file)}
    json.extract! business, :id, 
                        :name,
                        :creator_id, 
                        :category, 
                        :street, 
                        :city, 
                        :zip_code, 
                        :webpage, 
                        :phone_number, 
                        :state, 
                        :price
  end
end
