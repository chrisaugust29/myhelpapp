class Business < ApplicationRecord

    validates :name, :creator_id, :category, :street, :city, presence: true
    validates :zip_code, :webpage, :phone_number, :state, presence: true
    validates :price, inclusion: { in: (1..4) }

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: "User"
    





end
