import logging

from eureka.client import EurekaClient

logging.basicConfig()

ec = EurekaClient("MyApplication",
                  eureka_domain_name="test.yourdomain.net",
                  region="eu-west-1",
                  vip_address="http://app.yourdomain.net/",
                  port=80,
                  secure_vip_address="https://app.yourdomain.net/",
                  secure_port=443
                  )
print(ec.get_zones_from_dns())
print(ec.get_eureka_urls())
print(ec.register())
print(ec.update_status("UP"))  # Or ec.register("UP")
print(ec.heartbeat())
