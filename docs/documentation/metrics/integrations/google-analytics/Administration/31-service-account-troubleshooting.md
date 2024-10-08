---
title: Service account troubleshooting
---
# Troubleshooting Google Analytics Service Account Access 🔍

If you're experiencing issues with your Google Analytics service account access, this guide will help you diagnose and resolve common problems.

## Test you can access properties

Google have provided a tool to test your service account can access properties and their fields. It uses oauth rather than the service account, but will test if the properties are valid.

https://ga-dev-tools.google/ga4/dimensions-metrics-explorer/

## Running the Diagnostic Script 🖥️

Here is a Node.js script to help diagnose issues with your service account. Here's how to use it:

1. Ensure you have Node.js installed on your system.
2. Save the following script as `test_ga_sa.js`:

```javascript
const { google } = require("googleapis");
const fs = require("fs");

const keyFilePath = process.argv[2];
const serviceAccountKey = JSON.parse(fs.readFileSync(keyFilePath, "utf8"));

async function listGAAccountsAndProperties() {
  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccountKey,
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });

  const analyticsAdmin = google.analyticsadmin({ version: "v1beta", auth });

  try {
    console.log("Attempting to list accounts...");
    const accountSummariesResponse =
      await analyticsAdmin.accountSummaries.list();
    const accountSummaries =
      accountSummariesResponse.data.accountSummaries || [];

    console.log(
      `Accounts found - data.accountSummaries: ${accountSummaries.length}`
    );
    console.log(
      `Details: ${JSON.stringify(
        accountSummaries,
        null,
        2
      )}`
    );
    console.log(`\n\n----------------------------------------\n\n`);
    for (const account of accountSummaries) {
      console.log(`\nAccount: ${account.displayName} (${account.name})`);

      const accountId = account.name.split("/")[1];

      console.log(`Listing properties for account ${accountId}...\n\n`);
      const propertiesResponse = await analyticsAdmin.properties.list({
        filter: `parent:accounts/${accountId}`,
        pageSize: 200,
      });
      const properties = propertiesResponse.data.properties || [];

      console.log(`Properties found: ${properties.length}`);

      properties.forEach((property, index) => {
        console.log(JSON.stringify(property, null, 2));
      });
    }
  } catch (error) {
    console.error("Error encountered:");
    if (error.response) {
      console.error("  Status:", error.response.status);
      console.error("  Data:", JSON.stringify(error.response.data, null, 2));
    } else {
      console.error("  Message:", error.message);
    }
    console.log("\nPossible reasons for errors:");
    console.log(
      "1. The service account does not have access to any Google Analytics accounts or properties."
    );
    console.log(
      "2. There might be an issue with the service account permissions."
    );
    console.log(
      "3. The Analytics Admin API might not be enabled for this project."
    );
  }
}

listGAAccountsAndProperties();
```

3. Install the required dependencies:
   ```
   npm install googleapis fs
   ```

4. Run the script, providing the path to your service account key file:
   ```
   node test_ga_sa.js /path/to/your/service-account-key.json
   ```

5. Analyze the output for any errors or issues.


## Test access to individual property 🖥️

2. Save the following script as `test_ga_property.js`:
3. 
```javascript
const { google } = require('googleapis');
const fs = require('fs');

const keyFilePath = process.argv[2];
const propertyId = process.argv[3];

if (!keyFilePath || !propertyId) {
  console.error('Usage: node test_ga_property.js <path_to_service_account_key.json> <propertyId>');
  process.exit(1);
}

const serviceAccountKey = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));

async function runDiagnostics() {
  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccountKey,
    scopes: ['https://www.googleapis.com/auth/analytics.readonly']
  });

  const analyticsData = google.analyticsdata({ version: 'v1beta', auth });

  try {
    console.log(`Running diagnostics for property: ${propertyId}`);
    console.log('\nFetching available metrics...');
    const metadata = await analyticsData.properties.getMetadata({
      name: `properties/${propertyId}/metadata`
    });

    console.log('Available metrics:');
    metadata.data.metrics.forEach(metric => {
      console.log(`- ${metric.apiName}`);
    });

    console.log('\nAttempting to run a simple report...');
    const report = await analyticsData.properties.runReport({
      property: `properties/${propertyId}`,
      resource: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [{ name: 'activeUsers' }]
      }
    });

    console.log('Report run successfully. Sample data:');
    console.log(report.data.rows[0].metricValues[0].value);

  } catch (error) {
    console.error('Error encountered:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
    }
    console.log('\nPossible reasons for errors:');
    console.log('1. The service account does not have access to this property.');
    console.log('2. The property ID is incorrect or doesn\'t exist.');
    console.log('3. The Google Analytics Data API is not enabled for this project.');
    console.log('4. There might be an issue with the service account permissions.');
  }
}

runDiagnostics();
```

4. Run the script, providing the path to your service account key file:
   ```
   node test_ga_property.js /path/to/your/service-account-key.json
   ```

5. Analyze the output for any errors or issues.

## Manual Checks 📋

### 1. Verify Service Account Permissions in Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Navigate to Admin > Property > Property Access Management
3. Ensure your service account email is listed with the correct permissions

### 2. Check Google Cloud Project Configuration

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Ensure the Google Analytics Data API is enabled for your project
3. Verify that your service account exists and has the necessary roles


## Common Issues and Solutions 🛠️

1. **No properties found**: Ensure the service account has been added to the correct Google Analytics property with the right permissions.

2. **API not enabled**: Make sure the Google Analytics Data API is enabled in your Google Cloud project.

3. **Invalid scope**: Verify that the correct API scope is being used (`https://www.googleapis.com/auth/analytics.readonly` for read-only access).

4. **Organizational policy restrictions**: Work with your organization's admin to review and potentially modify restrictive policies.

## Additional Resources 📚

- [Google Analytics Data API Documentation](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [Google Cloud IAM Troubleshooter](https://cloud.google.com/iam/docs/troubleshooting-access)
- [Understanding Service Accounts](https://cloud.google.com/iam/docs/understanding-service-accounts)
- [Google Cloud Organization Policy Documentation](https://cloud.google.com/resource-manager/docs/organization-policy/overview)

If you continue to experience issues after following these troubleshooting steps, please contact your organization's Google Cloud administrator or Google Cloud support for further assistance.
