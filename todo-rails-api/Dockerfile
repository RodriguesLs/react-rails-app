FROM ruby:2.6.6

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs && gem install bundler rails

ENV APP_HOME /todo-rails-api
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
ADD Gemfile Gemfile.lock $APP_HOME/
RUN bundle install
COPY . $APP_HOME

EXPOSE 3001

CMD rails s -b '0.0.0.0' -p 3001
