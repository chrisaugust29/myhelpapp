class Business < ApplicationRecord

    validates :name, :creator_id, :category, :street, :city, presence: true
    validates :zip_code, :webpage, :phone_number, :state, presence: true
    validates :price, presence: true

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: "User"
    
    has_one_attached :photos





end
