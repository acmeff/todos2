# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.destroy_all

todo1 = Todo.create(title: "Play #{Faker::Zelda.game}",
                    body: "Find #{Faker::Zelda.character}",
                    done: false)

todo2 = Todo.create(title: "Play #{Faker::Zelda.game}",
                    body: "Find #{Faker::Zelda.character}",
                    done: false)

todo3 = Todo.create(title: "Play #{Faker::Zelda.game}",
                    body: "Find #{Faker::Zelda.character}",
                    done: false)
