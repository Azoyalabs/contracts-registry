## Stakedrops listing

This repository holds the information for the Fetchstation app to list upcoming stakedrops.


## Stakedrop info

To add a new drop, you need to create a new JSON file under the [drops](/drops) folder.

The content of the file should be like this:

```JSON
{
    "name": "Veum Stroman",
    "website": "https://loremflickr.com/640/480/business",
    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "ends": "2024-05-07T14:20:56.507Z",
    "start": "2023-08-16T07:59:50.479Z",
    "logo": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/705.jpg",
    "socials": {
        "telegram": "",
        "github": "",
        "twitter": ""
    },
    "type": "blockchain",
    "claim": ""
}
```


The name of the file should be a slug. Following our example ```Veum Stroman``` that would be ```veum-stroman```

Type can either be ```blockchain```or ```project```. With blockchain to be preferred for launching actual chains. 