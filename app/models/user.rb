class User < ApplicationRecord
    validates :username,:email, :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, presence: true  
    validates :password_digest, presence: true 
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password
    after_initialize :ensure_session_token

    #ripes
    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil

    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end



