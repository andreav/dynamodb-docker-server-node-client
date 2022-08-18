# Launch DynamoDb with docker

    docker run -p 8000:8000 --name dynamodb amazon/dynamodb-local

# Create node app

    npm init
    npm install aws-sdk

# Launch DynamoDB query

    export AWS_PROFILE=<any-aws-profile-from-credentials>
    node scripts/listTables.js
