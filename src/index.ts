import {
  Bootstrapper,
  EVENT_NAMES,
  JsonSpec,
} from "@crystallize/import-utilities";
import * as dotenv from "dotenv";
dotenv.config();

const languages = [
  {
    code: "en",
    name: "English",
    isDefault: false,
  },
  {
    code: "no",
    name: "Norwegian",
    isDefault: true,
  },
];

async function go() {
  const tenantSpec: JsonSpec = {
    languages: languages,
    shapes: [
      {
        identifier: "phone-accessory-folder",
        name: "Phone Accessory Folder",
        type: "folder",
        components: [],
      },
      {
        identifier: "phone-accessory-product",
        name: "Phone Accessory Product",
        type: "product",
        components: [
          {
            id: "title",
            name: "Title",
            type: "singleLine",
          },
          {
            id: "description",
            name: "Description",
            type: "richText",
          },
          {
            id: "images",
            name: "Images",
            type: "images",
          },
          {
            id: "properties",
            name: "Properties",
            type: "propertiesTable",
          },
        ],
      },
    ],
    vatTypes: [
      {
        name: "Standard VAT",
        percent: 20,
      },
    ],
    items: [
      {
        name: "Phone Accessories",
        shape: "phone-accessory-folder",
        externalReference: "phone-accessory-folder",
        children: [
          {
            name: "iPhone 13 Case",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-1",
            components: {
              title: "iPhone 13 Case",
              description: {
                plainText: "Protect your iPhone 13 with this stylish case.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    color: "Black",
                    material: "Silicone",
                    compatibleWith: "iPhone 13",
                    modelNo: "IPH13-CASE",
                    dimensions: "5.78 x 2.81 x 0.29 inches",
                    weight: "0.85 ounces",
                  },
                },
                {
                  title: "Features",
                  properties: {
                    Shockproof: "Yes",
                  },
                },
              ],
            },
            variants: [
              {
                name: "iPhone 13 Case - Black",
                sku: "IPH13-CASE-BLK",
                price: 29.99,
                stock: 50,
                attributes: {
                  color: "black",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/24/3/mm2a3.jpeg",
                    altText: "iPhone 13 Case - Black",
                  },
                ],
              },
              {
                name: "iPhone 13 Case - Red",
                sku: "IPH13-CASE-RED",
                price: 29.99,
                stock: 50,
                attributes: {
                  color: "red",
                },
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/24/4/mm2c3.jpeg",
                    altText: "iPhone 13 Case - Red",
                  },
                ],
              },
            ],
          },
          {
            name: "Samsung Galaxy S21 Case",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-2",
            components: {
              title: "Samsung Galaxy S21 Case",
              description: {
                plainText:
                  "Protect your Samsung Galaxy S21 with this stylish case.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    color: "Blue",
                    material: "Silicone",
                    compatibleWith: "Samsung Galaxy S21",
                    modelNo: "SGS21-CASE",
                    dimensions: "6.2 x 2.96 x 0.31 inches",
                    weight: "0.95 ounces",
                  },
                },
                {
                  title: "Features",
                  properties: {
                    Shockproof: "Yes",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Samsung Galaxy S21 Case - Blue",
                sku: "SGS21-CASE-BLU",
                price: 29.99,
                stock: 50,
                attributes: {
                  color: "blue",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/24/2/nillkin-frosted-shield-galaxy-s21-fe-blue-00.jpg",
                    altText: "Samsung Galaxy S21 Case - Blue",
                  },
                ],
              },
              {
                name: "Samsung Galaxy S21 Case - Black",
                sku: "SGS21-CASE-BLK",
                price: 29.99,
                stock: 50,
                attributes: {
                  color: "black",
                },
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/24/2/nillkin-frosted-shield-galaxy-s21-fe-black-00.webp",
                    altText: "Samsung Galaxy S21 Case - Black",
                  },
                ],
              },
            ],
          },
          {
            name: "USB-C Cable",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-3",
            components: {
              title: "USB-C Cable",
              description: {
                plainText:
                  "High-speed USB-C cable, compatible with all USB-C devices.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    length: "1m, 2m, 3m",
                    material: "Nylon braided",
                    compatibleWith: "All USB-C devices",
                    modelNo: "USBC-CABLE",
                  },
                },
              ],
            },
            variants: [
              {
                name: "USB-C Cable - 1m",
                sku: "USBC-CABLE-1M",
                price: 15.99,
                stock: 150,
                attributes: {
                  length: "1m",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/40/pexels-goumbik-296625.jpg",
                    altText: "USB-C Cable - 1m",
                  },
                ],
              },
              {
                name: "USB-C Cable - 2m",
                sku: "USBC-CABLE-2M",
                price: 19.99,
                stock: 50,
                attributes: {
                  length: "2m",
                },
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/40/pexels-goumbik-296625.jpg",
                    altText: "USB-C Cable - 2m",
                  },
                ],
              },
              {
                name: "USB-C Cable - 3m",
                sku: "USBC-CABLE-3M",
                price: 24.99,
                stock: 75,
                attributes: {
                  length: "3m",
                },
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/40/pexels-goumbik-296625.jpg",
                    altText: "USB-C Cable - 3m",
                  },
                ],
              },
            ],
          },
          {
            name: "Wireless Charger",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-4",
            components: {
              title: "Wireless Charger",
              description: {
                plainText:
                  "Fast wireless charger compatible with all Qi-enabled devices.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    outputPower: "15W",
                    compatibleWith: "All Qi-enabled devices",
                    dimensions: "3.9 x 3.9 x 0.4 inches",
                    weight: "3.5 ounces",
                    color: "Black, White",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Wireless Charger - Black",
                sku: "WIRELESS-CHARGER-BLK",
                price: 29.99,
                stock: 100,
                attributes: {
                  color: "black",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/41/wireless-charger.webp",
                    altText: "Wireless Charger - Black",
                  },
                ],
              },
              {
                name: "Wireless Charger - White",
                sku: "WIRELESS-CHARGER-WHT",
                price: 29.99,
                stock: 100,
                attributes: {
                  color: "white",
                },
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/39/pexels-cottonbro-5083491.jpg",
                    altText: "Wireless Charger - White",
                  },
                ],
              },
            ],
          },
          {
            name: "Screen Protector",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-5",
            components: {
              title: "Screen Protector",
              description: {
                plainText: "Durable screen protector for iPhone 13.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    type: "Clear, Privacy",
                    compatibleWith: "iPhone 13",
                    modelNo: "IPH13-SP",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Screen Protector - Clear",
                sku: "SCREEN-PROTECTOR-CLR",
                price: 9.99,
                stock: 200,
                attributes: {
                  type: "clear",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/42/screen-protector.jpg",
                    altText: "Screen Protector - Clear",
                  },
                ],
              },
              {
                name: "Screen Protector - Privacy",
                sku: "SCREEN-PROTECTOR-PRV",
                price: 14.99,
                stock: 100,
                attributes: {
                  type: "privacy",
                },
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/42/screen-protector.jpg",
                    altText: "Screen Protector - Privacy",
                  },
                ],
              },
            ],
          },
          {
            name: "Phone Stand",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-6",
            components: {
              title: "Phone Stand",
              description: {
                plainText:
                  "Adjustable phone stand compatible with all smartphones.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    material: "Aluminum alloy",
                    compatibleWith: "All smartphones",
                    modelNo: "PHONE-STAND",
                    dimensions: "3.15 x 3.15 x 4.72 inches",
                    weight: "4.8 ounces",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Phone Stand - Silver",
                sku: "PHONE-STAND-SLV",
                price: 19.99,
                stock: 100,
                attributes: {
                  color: "silver",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/59/phone-stand-silver.jpeg",
                    altText: "Phone Stand - Silver",
                  },
                ],
              },
              {
                name: "Phone Stand - Black",
                sku: "PHONE-STAND-BLK",
                price: 19.99,
                stock: 100,
                attributes: {
                  color: "black",
                },
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/60/phone-stand-black.jpg",
                    altText: "Phone Stand - Black",
                  },
                ],
              },
            ],
          },
          {
            name: "Car Charger",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-7",
            components: {
              title: "Car Charger",
              description: {
                plainText:
                  "Dual USB car charger compatible with all smartphones.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    outputPower: "24W",
                    compatibleWith: "All smartphones",
                    modelNo: "CAR-CHARGER",
                    dimensions: "2.8 x 1.1 x 1.1 inches",
                    weight: "0.8 ounces",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Car Charger - Black",
                sku: "CAR-CHARGER-BLK",
                price: 14.99,
                stock: 150,
                attributes: {
                  color: "black",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/61/phone-car-charger-black.jpeg",
                    altText: "Car Charger - Black",
                  },
                ],
              },
              {
                name: "Car Charger - White",
                sku: "CAR-CHARGER-WHT",
                price: 14.99,
                stock: 150,
                attributes: {
                  color: "white",
                },
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/55/phone-car-charger-white.jpeg",
                    altText: "Car Charger - White",
                  },
                ],
              },
            ],
          },
          {
            name: "Phone Holder",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-8",
            components: {
              title: "Phone Holder",
              description: {
                plainText:
                  "Universal phone holder compatible with all smartphones.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    material: "ABS",
                    compatibleWith: "All smartphones",
                    modelNo: "PHONE-HOLDER",
                    dimensions: "4.33 x 3.15 x 3.15 inches",
                    weight: "3.2 ounces",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Phone Holder - Black",
                sku: "PHONE-HOLDER-BLK",
                price: 9.99,
                stock: 200,
                attributes: {
                  color: "black",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/49/uchwyt-z-pilotem-bluetooth-do-smartfona-ulanzi-capgrip-black.jpg",
                    altText: "Phone Holder - Black",
                  },
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/47/uchwyt-z-pilotem-bluetooth-do-smartfona-ulanzi-capgrip-black-2.jpg",
                    altText: "Phone Holder - Black 2",
                  },
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/46/uchwyt-z-pilotem-bluetooth-do-smartfona-ulanzi-capgrip-black-4.jpg",
                    altText: "Phone Holder - Black 3",
                  },
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/45/uchwyt-z-pilotem-bluetooth-do-smartfona-ulanzi-capgrip-black-5.jpg",
                    altText: "Phone Holder - Black 4",
                  },
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/44/uchwyt-z-pilotem-bluetooth-do-smartfona-ulanzi-capgrip-black-3.jpg",
                    altText: "Phone Holder - Black 5",
                  },
                ],
              },
            ],
          },
          {
            name: "Phone Ring Holder",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-9",
            components: {
              title: "Phone Ring Holder",
              description: {
                plainText:
                  "Adjustable phone ring holder compatible with all smartphones.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    material: "Zinc alloy",
                    compatibleWith: "All smartphones",
                    modelNo: "PHONE-RING-HOLDER",
                    dimensions: "1.18 x 1.18 x 0.2 inches",
                    weight: "0.4 ounces",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Phone Ring Holder - Black",
                sku: "PHONE-RING-HOLDER-BLK",
                price: 4.99,
                stock: 300,
                attributes: {
                  color: "black",
                },
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/58/1-uchwyt-podstawka-tech-protect-magnetic-magsafe-phone-ring-szary-front.jpg",
                    altText: "Phone Ring Holder - Black",
                  },
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/56/2-uchwyt-podstawka-tech-protect-magnetic-magsafe-phone-ring-szary-tyl.jpg",
                    altText: "Phone Ring Holder - Black 2",
                  },
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/53/4-uchwyt-podstawka-tech-protect-magnetic-magsafe-phone-ring-szary-obraz-lifestyle-2.jpg",
                    altText: "Phone Ring Holder - Black 3",
                  },
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/52/6-uchwyt-podstawka-tech-protect-magnetic-magsafe-phone-ring-szary-obraz-lifestyle-4.jpg",
                    altText: "Phone Ring Holder - Black 4",
                  },
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/51/5-uchwyt-podstawka-tech-protect-magnetic-magsafe-phone-ring-szary-obraz-lifestyle-3.jpg",
                    altText: "Phone Ring Holder - Black 5",
                  },
                ],
              },
            ],
          },
          {
            name: "Phone Grip",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-10",
            components: {
              title: "Phone Grip",
              description: {
                plainText:
                  "Adjustable phone grip compatible with all smartphones.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    material: "ABS",
                    compatibleWith: "All smartphones",
                    modelNo: "PHONE-GRIP",
                    dimensions: "1.57 x 1.57 x 0.28 inches",
                    weight: "0.2 ounces",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Phone Grip - Black",
                sku: "PHONE-GRIP-BLK",
                price: 2.99,
                stock: 500,
                attributes: {
                  color: "black",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/49/uchwyt-z-pilotem-bluetooth-do-smartfona-ulanzi-capgrip-black.jpg",
                    altText: "Phone Grip - Black",
                  },
                ],
              },
            ],
          },
          {
            name: "Phone Camera Lens",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-11",
            components: {
              title: "Phone Camera Lens",
              description: {
                plainText:
                  "Clip-on phone camera lens compatible with all smartphones.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    lensType: "Wide angle, Macro, Fisheye",
                    compatibleWith: "All smartphones",
                    modelNo: "PHONE-LENS",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Phone Camera Lens - Wide Angle",
                sku: "PHONE-LENS-WA",
                price: 9.99,
                stock: 200,
                attributes: {
                  lensType: "wide angle",
                },
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/43/phone-lens.webp",
                    altText: "Phone Camera Lens - Wide Angle",
                  },
                ],
              },
            ],
          },
          {
            name: "Phone Cleaning Kit",
            shape: "phone-accessory-product",
            vatType: "Standard VAT",
            externalReference: "phone-accessory-product-12",
            components: {
              title: "Phone Cleaning Kit",
              description: {
                plainText: "Complete phone cleaning kit for all smartphones.",
              },
              properties: [
                {
                  title: "Details",
                  properties: {
                    contents: "Cleaning solution, Microfiber cloth, Brush",
                    compatibleWith: "All smartphones",
                    modelNo: "PHONE-CLEANING-KIT",
                  },
                },
              ],
            },
            variants: [
              {
                name: "Phone Cleaning Kit",
                sku: "PHONE-CLEANING-KIT",
                price: 7.99,
                stock: 300,
                isDefault: true,
                images: [
                  {
                    src: "https://media.crystallize.com/phoneaccessoriesstore/24/5/21/43/phone-clean-kit.webp",
                    altText: "Phone Cleaning Kit",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const bootstrapper = new Bootstrapper();

  const ACCESS_TOKEN_ID = process.env.CRYSTALLIZE_ACCESS_TOKEN_ID as string;
  const ACCESS_TOKEN_SECRET = process.env
    .CRYSTALLIZE_ACCESS_TOKEN_SECRET as string;
  const TENANT_IDENTIFIER = process.env.CRYSTALLIZE_TENANT_IDENTIFIER as string;

  bootstrapper.setAccessToken(ACCESS_TOKEN_ID, ACCESS_TOKEN_SECRET);
  bootstrapper.setTenantIdentifier(TENANT_IDENTIFIER);

  bootstrapper.on(EVENT_NAMES.ERROR, (error) => {
    console.log(JSON.stringify(error, null, 1));
  });

  bootstrapper.on(EVENT_NAMES.DONE, (status) => {
    console.log(
      `Bootstrapped "${bootstrapper.tenantIdentifier}" in ${status.duration}`
    );
    process.exit(0);
  });

  bootstrapper.setSpec(tenantSpec);

  bootstrapper.start();
}

go();
