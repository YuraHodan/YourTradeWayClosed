class Manufacture < ActiveRecord::Base
  has_many :products, class_name: Product
  belongs_to  :country, class_name: Country
  has_many :images, class_name: Image
  accepts_nested_attributes_for :images
    mount_uploader :logo_image, ImageUploader
    mount_uploader :catalog_file, ImageUploader
    mount_uploader :sertificates_file, ImageUploader
    mount_uploader :price_list_file, ImageUploader
  belongs_to :second_menu, class_name: SecondMenu
  has_many :sertificates, class_name: Sertificate
    accepts_nested_attributes_for :sertificates
  translates :title, :description, :address, :full_name
  accepts_nested_attributes_for :translations, allow_destroy: true
end
