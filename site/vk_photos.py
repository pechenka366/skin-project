import requests
import os
import re

TOKEN = "vk1.a.LBLiGi7t_haw0kfEP2p6nZYT-0q6fXfQX49p-eso249NcfyVBaR5vAPVizt0z7kUklDpjJMBaqqRK7RgLTHT_hNkYmlwOSYX1PbZgGscp7mWsm5cf4cmAngm5EcRfDczrzBCrl5MtpnB4fuyC_9J22uuybr85OwBuaV2TR7k9fYKmZyVxDB4wg0FwYxuqNYQxRzUd9Pu_HPmNf_Wjtu6eg"
OWNER_ID = -151091276  # id сообщества (с минусом) или пользователя
ALBUM_ID = "album_1"    # 'wall', 'profile', 'market' или конкретный id
API_VERSION = "5.131"

DESKTOP = os.path.join(os.path.expanduser("~"), "Desktop", "vk_market_photos")
os.makedirs(DESKTOP, exist_ok=True)

def clean_name(name):
    return re.sub(r'[\\/*?:"<>|]', "", name)

def api(method, params):
    params.update({
        "access_token": TOKEN,
        "v": API_VERSION
    })
    r = requests.get(f"https://api.vk.com/method/{method}", params=params).json()
    if "error" in r:
        raise Exception(r["error"])
    return r["response"]

print("🔍 Получаю список товаров...")

market = api("market.get", {
    "owner_id": OWNER_ID,
    "count": 200
})

for item in market["items"]:
    title = clean_name(item["title"])
    folder = os.path.join(DESKTOP, title)
    os.makedirs(folder, exist_ok=True)

    print(f"📦 {title}")

    photo_ids = []

    # дополнительные фото товара
    for p in item.get("photos", []):
        photo_ids.append(f"{OWNER_ID}_{p['id']}")

    # если доп. фото нет — берём главное фото
    if not photo_ids and "thumb_photo" in item:
        if isinstance(item["thumb_photo"], str):
            photo_ids.append(item["thumb_photo"])
        else:
            photo_ids.append(f"{OWNER_ID}_{item['thumb_photo']['id']}")


    if not photo_ids:
        print("  ⚠️ Нет фото, пропускаю")
        continue

    photos = api("photos.getById", {
        "photos": ",".join(photo_ids)
    })

    for i, photo in enumerate(photos, 1):
        size = max(photo["sizes"], key=lambda x: x["width"] * x["height"])
        img = requests.get(size["url"]).content
        with open(os.path.join(folder, f"{i}.jpg"), "wb") as f:
            f.write(img)

print("\n✅ Готово! Фото товаров сохранены на Рабочем столе.")