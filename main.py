import os
import discord
import time
import json
import requests
from discord_webhook import DiscordWebhook, DiscordEmbed
from datetime import date


def writeData(data, filename):
    with open(filename,"w") as f:
        print(data)
        json.dump(data,f,indent=4)
        f.close()


jsonFile = "data.json"

base_url = 'https://www.adidas.co.id'
url = 'https://www.adidas.co.id/graphql'
headers = {'Content-type': 'application/json','Accept': 'application/json'}
query = {
    'query': 'query ($_filter_0:ProductAttributeFilterInput!) {products(filter:$_filter_0){ items{ sku,url,thumbnail{ url } ... on ConfigurableProduct { variants{ product{ id, name, url, thumbnail{ url }, stock_status, stock_item{ max_sale_qty, min_sale_qty, qty, sale_qty } } } } } }}',
    'variables': {
        '_filter_0': {
            'customer_group_id': {
                'eq': 0
            },
            'sku': {
                'eq': 00000
            }
        }
    }
}

def getlast(): #Get last item in JSON file (get last stock number read)
    with open(jsonFile,"r+") as f:
        jsonObj = json.load(f)
        jsonObj2 = jsonObj["history"]
        last = jsonObj2[-1]
        f.close()
        return last

def checkstock(): #Check stock and return the stock number as well as the product URL regardless of outcome 

    
    postReq = requests.post(url,json=query)
    stockResponse = postReq.json()

    while True:
        try:
            variants = stockResponse['data']['products']['items'][0]['variants']
            productName = stockResponse['data']['products']['items'][0]['variants'][0]['product']['name']
            productUrl = stockResponse['data']['products']['items'][0]['url']
            thumbnail_url = stockResponse['data']['products']['items'][0]['variants'][0]['product']['thumbnail']['url']

            #webhook = DiscordWebhook(url='https://discord.com/api/webhooks/860749812881817600/TR_-viEKr6JpoBYhiLY5o4FXb23NCQom3wspWV9MymHRhJEebXpVsT9EPq-gnoZlmyae')
            webhook = DiscordWebhook(url='https://canary.discord.com/api/webhooks/869427444204052522/Eq2xiSgC0pvCYsLFWmf8WPf4zp3wfiiEDV6TUORK3K1xf5tK0UIG2rlmEXw-J40jgx_b')     
            Embed = DiscordEmbed(title='Adidas Indonesia Stock Checker',description="",colour='#ff0000')
            Embed.add_embed_field(name='Product Name', value=productName, inline=False)
            Embed.add_embed_field(name='Product Link', value=base_url+productUrl, inline=False)
            Embed.set_timestamp()
            Embed.set_thumbnail(url=thumbnail_url)
            Embed.set_footer(text='@Powered By DirectCop.ID', icon_url='https://cdn.discordapp.com/attachments/836449221422743562/857321099225202698/DirectCop_Logo.jpeg')
            
            init = 3.5
            column = ['Size(UK)     Stock']
            
            for variant in variants:
                stock = str(variant['product']['stock_item']['qty']).center(5, ' ')
                size = str(init).center(5, ' ')
                column.append(size + '     ' + stock)
                init = init + 0.5
                pass
            
            text = '```'+'\n'.join(column) + '```'
            Embed.add_embed_field(name="Prices", value=text, inline=True)
            webhook.add_embed(Embed)
            response = webhook.execute()

            break
            
        except IndexError:
            
            stock = "null"
            #webhook = DiscordWebhook(url='https://discord.com/api/webhooks/860749812881817600/TR_-viEKr6JpoBYhiLY5o4FXb23NCQom3wspWV9MymHRhJEebXpVsT9EPq-gnoZlmyae')
            webhook = DiscordWebhook(url='https://canary.discord.com/api/webhooks/869427444204052522/Eq2xiSgC0pvCYsLFWmf8WPf4zp3wfiiEDV6TUORK3K1xf5tK0UIG2rlmEXw-J40jgx_b')
            embed = DiscordEmbed(title='Adidas Indonesia Stock Checker',description="",colour='#ff0000')
            embed.add_embed_field(name='Product not loaded', value="Please try another SKU", inline=False)
            embed.set_timestamp()
            embed.set_footer(text='@Powered By DirectCop.ID', icon_url='https://cdn.discordapp.com/attachments/836449221422743562/857321099225202698/DirectCop_Logo.jpeg')
            webhook.add_embed(embed)
            response = webhook.execute()

            break


    print("Stock returned: {}".format(stock))
    return stock, productUrl

def writejson(write): #Send data to JSON file - used to update the stock numbers in the list
    with open(jsonFile,"r+") as f:

        jsonObj = json.load(f)
        jsonObj2 = jsonObj["history"]
        jsonObj2.append(write)
    writeData(jsonObj,jsonFile)

def check(last,checkval): #Check for a change in the latest stock reading and the current stock reading
    changeDetected = False
    if last == checkval:
        return changeDetected
    if last != checkval:
        changeDetected = True
        return changeDetected

def stockchange(url): #Actions upon stock change detected
    webhook = DiscordWebhook(url='https://canary.discord.com/api/webhooks/869427444204052522/Eq2xiSgC0pvCYsLFWmf8WPf4zp3wfiiEDV6TUORK3K1xf5tK0UIG2rlmEXw-J40jgx_b')
    embed = DiscordEmbed(title='Adidas Indonesia Stock Checker',description="",colour='#ff0000')
    embed.add_embed_field(name='STOCK CHANGE DETECETED', value="Please try another SKU", inline=False)
    embed.set_timestamp()
    embed.set_footer(text='@Powered By DirectCop.ID', icon_url='https://cdn.discordapp.com/attachments/836449221422743562/857321099225202698/DirectCop_Logo.jpeg')
    webhook.add_embed(embed)
    response = webhook.execute()
    return


while True:
    stockPulled, actionUrl = checkstock()
    last = getlast()
    stockChange = check(last,stockPulled)

    if stockChange == True:
        stockchange(actionUrl)

    writejson(stockPulled)
    time.sleep(30)


client.run("</>")
