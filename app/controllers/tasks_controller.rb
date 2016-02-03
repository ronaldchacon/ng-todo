class TasksController < ApplicationController
  before_action :authenticate_user!

  def index
    @tasks = current_user.tasks
    respond_with @tasks
  end

  def show
    @task = current_user.tasks.find(params[:id])
    respond_with @task
  end

  def create
  end

  def update
  end

  def delete
  end
end
