class TasksController < ApplicationController
  before_action :authenticate_user!

  def index
    @tasks = Task.all.where({ user: current_user })
    respond_with @tasks
  end

  def show
  end

  def create
  end

  def update
  end

  def delete
  end
end
