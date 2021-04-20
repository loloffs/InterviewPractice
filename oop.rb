class Person

  attr_accessor :name, :species

  def initialize(name)
    @name = name
    @species = "human"
  end

end



luke = Person.new("Luke Oloffs")

puts luke.species