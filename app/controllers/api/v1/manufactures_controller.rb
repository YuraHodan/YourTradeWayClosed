class Api::V1::ManufacturesController < Api::V1::BaseController
  def index
     @manufactures =  {
      top_manufactures:       filtered_manufactures(Manufacture.premium),
      manufactures:           filtered_manufactures(Manufacture.all),
      recomend_manufactures:  filtered_manufactures(Manufacture.recomend),
      countries:              countries,
      current_page:           current_page,
      pages_count:            pages_count,
      header_slider:          map_slider(SponsorSlider.show),
      side_slider:            map_slider(SponsorSideSlider.show),
      type_ids:               params[:type_ids],
      group_ids:              params[:group_ids],
      country_ids:            params[:country_ids]
    }
    respond_with @manufactures
  end

  private


  def filtered_manufactures(manufactures)
    filtered_data = manufactures
    filtered_data = filtered_data.where(second_menu_id: filter_ids) if filter_ids.any?
    filtered_data = filtered_data.where(country_id: params[:country_ids]) if params[:country_ids].present?
    map_manufactures(filtered_data)
  end

  def filter_ids
    array = []
    array << SecondMenu.where(main_menu_id: params[:type_ids]).pluck(:id) if params[:type_ids].present?
    array << SecondMenu.where(id: params[:group_ids]).pluck(:id) if params[:group_ids].present?
    array = array.flatten.uniq
  end

  def countries
    Country.all.map { |country|
      {
        id:    country.id,
        title: country.title
      }
    }

  end

  def map_slider(slides)
    slides.map { |slide|
      {
        image_url: slide.image.url
      }
    }
  end

  def pages_count
    Logistic.all.count / 12 + 1
  end

  def current_page
    return 1 unless params[:page_number]

    params[:page_number]
  end

  def map_manufactures(manufactures)
    manufactures.map{ |manufacture| {
        id:         manufacture.id,
        title:      manufacture.title,
        country:    manufacture.country.title,
        image_url:  manufacture.logo_image.url
        }
      }
  end
end