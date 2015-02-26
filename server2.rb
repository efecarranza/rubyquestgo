require 'sinatra'

# Set main website to default to efecarranza.html file

get '/' do
	File.read('index.html')
end