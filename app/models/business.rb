class Business < ApplicationRecord

    validates :name, :creator_id, :category, :street, :city,
        :zip_code, :webpage, : presence: true
end
