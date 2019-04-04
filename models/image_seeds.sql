CREATE TABLE "image_weddingDress" (
  "local_image_id" Int( 11 ) AUTO_INCREMENT NOT NULL, --creates local image id in our db
  "author" VARCHAR( 255) NOT NULL,  --photographer's name
  "url" VARCHAR( 255 ) NOT NULL,    --image url
  "api" VARCHAR( 255 ) NOT NULL,    --name of api source for image
  "created_at" DATETIME NOT NULL,   --date created on api's page (use for pushing newer images to top of page)

  PRIMARY KEY ("local_image_id") 
);