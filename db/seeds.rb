user = User.first

10.times do
  Task.create!(
    {
      name: Faker::Lorem.sentence,
      due_date: Faker::Time.forward(2),
      notes: Faker::Lorem.sentence,
      user: user,
      is_completed: false
    }
  )
end
