# json.partial! '/api/businesses/business', business: @business
# json.photoUrls @business.photos.map { |file| url_for(file)}
# json.set! @business.id do
    json.extract! @business, :id, 
                        :name,
                        :creator_id, 
                        :category, 
                        :street, 
                        :city, 
                        :zip_code, 
                        :webpage, 
                        :phone_number, 
                        :state, 
                        :price,
                        :lat,
                        :lng,
                        :info

  json.photoUrls @business.photos.map { |file| url_for(file)}
    # if @business.photos.attached?
    #     json.photo_url url_for(@business.photos)
    #   else
    #     json.photo_url ''
    #   end
#   end