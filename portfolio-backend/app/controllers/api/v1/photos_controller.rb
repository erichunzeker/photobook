module Api::V1
  class PhotosController < ApplicationController
    def index
      @photos = Photo.order("created_at DESC")
      render json: @photos
    end

    def create
      @photo = Photo.create(photo_params)
      render json: @photo
    end

    def update
      @photo = Photo.find(params[:id])
      @photo.update_attributes(photo_params)
      render json: @photo
    end

    def destroy
      @photo = Photo.find(params[:id])
      if @photo.destroy
        head :no_content, status: :ok
      else
        render json: @photo.errors, status: :unprocessable_entity
      end
    end

    private
      def photo_params
        params.require(:photo).permit(:name)
      end

  end
end