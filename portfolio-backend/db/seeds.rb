# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

photos = Photo.create(
    [
        {
            name: 'http://surfsidepropertiesinc.com/images/builder_general_contractor_Manhattan_Beach_Map.jpg'
        },
        {
            name: 'http://www.mappery.com/maps/Santa-Monica-California-Map.mediumthumb.pdf.png'
        },
        {
            name: 'http://www.destination360.com/north-america/us/california/marina-del-rey/the-inn-at-venice-beach-map.gif'
        }
    ])