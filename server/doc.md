### **MUSIC 4 EVERYONE**

## **>> ROUTES <<**

# 1. USER REGISTER

- **URL**

  /user/register

- **Method:**

  `POST`

- **Request Params**

  None

- **Request Header**

  None

- **Request Body**

  ```javascript
  {
  	"id", "email";
  }
  ```

- **.ENV-TEMPLATE**

  None

- **Success Response:**

  - **Code:** 201 CREATED<br />
    **Content:**
    ```javascript
    {
    	"id", "email";
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST<br />
    **Content:**
    ```javascript
    {
      "message": [
      "Email Is Require",
      "Invalid Email Format",
      "Email is Already Register",
      "Password Is Require",
      "Password Is More Than or Equal 6 Characters",
      ]
    }
    ```

  OR

  - **Code:** 500 Internal Server Error<br />
    **Content:** `{ message }`

# 2. USER LOGIN

- **URL**

  /user/login

- **Method:**

  `POST`

- **Request Params**

  None

- **Request Body**

  ```javascript
  {
  	"id", "email";
  }
  ```

- **Request Headers**

  None

- **.ENV-TEMPLATE**

  None

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ accessToken }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST<br />
    **Content:**
    ```javascript
    {
      "message": [
      "Email Is Require",
      "Invalid Email Format"
      "Password Is Require",
      "Password Is More Than or Equal 6 Characters",
      "Email/Password Wrong"
      ]
    }
    ```

  OR

  - **Code:** 500 Internal Server Error<br />
    **Content:** `{ message }`

# 3. USER GOOGLE LOGIN

- **URL**

  /user/googlelogin

- **Method:**

  `POST`

- **Request Params**

  None

- **Request Headers**

  None

- **Request Body**

  `{ googleToken }`

- **.ENV-TEMPLATE**

  `{ CLIENT_ID, GOOGLE_PASS }`

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:** `{ accessToken }`

  OR

  - **Code:** 201 CREATED<br />
    **Content:** `{ accessToken }`

- **Error Response:**

  - **Code:** 500 Internal Server Error<br />
    **Content:** `{ message }`

# 4. SONG SEARCH

- **URL**

  /song/search

- **Method:**

  `GET`

- **Request Params**

  ```javascript
  {
  	"term", "limit", "media";
  }
  ```

- **Request Headers**

  `{ accessToken }`

- **Request Body**

  None

- **.ENV-TEMPLATE**

  None

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:**
    ```javascript
    [
      {
        "title",
        "artist",
        "album",
        "genre",
        "releaseDate",
        "trackId",
        "previewUrl",
        "artworkUrl",
        "trackTimeMillis"
      },
      {
        "title",
        "artist",
        "album",
        "genre",
        "releaseDate",
        "trackId",
        "previewUrl",
        "artworkUrl",
        "trackTimeMillis"
      },
      {
        .....
      }
    ]
    ```

- **Error Response:**

  - **Code:** 404 NOT FOUND<br />
    **Content:**
    ```javascript
    {
      "message": [
      "We're sorry, song not found"
      ]
    }
    ```

  OR

  - **Code:** 500 Internal Server Error<br />
    **Content:** `{ message }`

# 5. WEATHER API

- **URL**

  /weather

- **Method:**

  `GET`

- **Request Params**

  None

- **Request Headers**

  `{ accessToken }`

- **Request Body**

  None

- **.ENV-TEMPLATE**

  None

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:**
    ```javascript
    [
      {
        "temp",
        "feels_like",
        "temp_min",
        "temp_max",
        "pressure",
        "humidity",
      },
      {
        "id",
        "main",
        "description",
        "icon",
      },
      {
        "city"
      }
    ]
    ```

- **Error Response:**

  - **Code:** 500 Internal Server Error<br />
    **Content:** `{ message }`

# 6. COVID-19 API

- **URL**

  /corona

- **Method:**

  `GET`

- **Request Params**

  ```javascript
  {
  	name: "indonesia";
  }
  ```

- **Request Headers**

  ```javascript
  {
    "x-rapidapi-key",
    "x-rapidapi-host",
    "accessToken"
  }
  ```

- **Request Body**

  None

- **.ENV-TEMPLATE**

  `{CORONA_API_KEY}`

- **Success Response:**

  - **Code:** 200 OK<br />
    **Content:**
    ```javascript
    [
    	{
    		country: "Indonesia",
    		code: "ID",
    		confirmed: 828026,
    		recovered: 681024,
    		critical: 0,
    		deaths: 24129,
    		latitude: -0.789275,
    		longitude: 113.921327,
    		lastChange: "2021-01-10T09:39:39+01:00",
    		lastUpdate: "2021-01-10T23:45:04+01:00",
    	},
    ];
    ```

- **Error Response:**

  - **Code:** 500 Internal Server Error<br />
    **Content:** `{ message }`
