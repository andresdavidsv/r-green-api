const usersMock = [
  {
    id: 'dce78c7b-0c8e-4670-af5c-72dc3bbf4f9d',
    first_name: 'Adelind',
    last_name: 'Lembrick',
    user_name: 'alembrick0',
    email: 'alembrick0@bloglovin.com',
    password: '7DLKfm',
  },
  {
    id: 'e3b6de23-3e8c-4183-aaa5-3b977aa96dcc',
    first_name: 'Therine',
    last_name: 'Biset',
    user_name: 'tbiset1',
    email: 'tbiset1@google.fr',
    password: 'WCF9tD',
  },
  {
    id: 'e55578db-1e38-4e90-af83-6195d4b62707',
    first_name: 'Alameda',
    last_name: 'Springle',
    user_name: 'aspringle2',
    email: 'aspringle2@soundcloud.com',
    password: 'xYgriHDq',
  },
  {
    id: '05d880de-fa0b-4354-a657-0d7c0bd5f321',
    first_name: 'Barnebas',
    last_name: 'Cavaney',
    user_name: 'bcavaney3',
    email: 'bcavaney3@list-manage.com',
    password: 'Yz0x3ME0HU',
  },
  {
    id: '9f6c7217-eb22-4105-add7-427b87d85a9d',
    first_name: 'Jobina',
    last_name: 'Clampton',
    user_name: 'jclampton4',
    email: 'jclampton4@1688.com',
    password: 'GQmuEOM15',
  },
  {
    id: '687aa68f-4e54-4280-bb44-5efb6bbb1a5b',
    first_name: 'Urson',
    last_name: 'Labarre',
    user_name: 'ulabarre5',
    email: 'ulabarre5@unc.edu',
    password: 'LbO61P',
  },
  {
    id: '3549f4ef-4bb9-4ed8-a93c-f42c5ce58b14',
    first_name: 'Melly',
    last_name: 'Greedy',
    user_name: 'mgreedy6',
    email: 'mgreedy6@multiply.com',
    password: 'abhNixEl',
  },
  {
    id: 'c9e6bc8c-00ab-4332-a2d2-6c2bff5e9e8e',
    first_name: 'Linette',
    last_name: 'Currell',
    user_name: 'lcurrell7',
    email: 'lcurrell7@buzzfeed.com',
    password: 'mJH9K5P',
  },
  {
    id: '070e17bc-73b0-4629-86df-f3210f78b949',
    first_name: 'Cristionna',
    last_name: 'Croisier',
    user_name: 'ccroisier8',
    email: 'ccroisier8@fda.gov',
    password: '0lFSIQiNen',
  },
  {
    id: '0ed83053-2778-43a6-8d93-530cb8494dff',
    first_name: 'Ellyn',
    last_name: 'Revens',
    user_name: 'erevens9',
    email: 'erevens9@amazon.co.jp',
    password: 'qTB0H0Vxg',
  },
  {
    id: '81d3d056-6e08-4d84-a4da-1a5a44177da9',
    first_name: 'Shirleen',
    last_name: 'Cornes',
    user_name: 'scornesa',
    email: 'scornesa@ezinearticles.com',
    password: 'N47GvN',
  },
  {
    id: 'f57362a9-492b-494c-b173-4fb842dba4fc',
    first_name: 'Melloney',
    last_name: 'Brook',
    user_name: 'mbrookb',
    email: 'mbrookb@businesswire.com',
    password: 'PTguHK',
  },
  {
    id: 'aff04c3c-2339-495b-ae5d-1e7120a93068',
    first_name: 'Avram',
    last_name: 'Filer',
    user_name: 'afilerc',
    email: 'afilerc@java.com',
    password: 'MM3WDWEuNd',
  },
  {
    id: '4a84d280-39eb-49da-b563-adb039ce20ed',
    first_name: 'Cindra',
    last_name: 'Gonnel',
    user_name: 'cgonneld',
    email: 'cgonneld@sourceforge.net',
    password: '95AmHb1Rc',
  },
  {
    id: '611fd201-dfe7-4486-90ba-4b2b4e840259',
    first_name: 'Anett',
    last_name: 'Livings',
    user_name: 'alivingse',
    email: 'alivingse@google.com.br',
    password: 'Hf1yI9E',
  },
  {
    id: 'a304c072-242c-4552-bc37-14132248d959',
    first_name: 'Darcy',
    last_name: 'Kilby',
    user_name: 'dkilbyf',
    email: 'dkilbyf@sun.com',
    password: 'x5OjfW',
  },
  {
    id: 'bbc0496f-d621-41ad-9454-7e3e5e530855',
    first_name: 'Angelle',
    last_name: 'Fullerd',
    user_name: 'afullerdg',
    email: 'afullerdg@gizmodo.com',
    password: 'uioa79Ku',
  },
  {
    id: '77049133-6f43-428b-a27a-3dba62a1fc31',
    first_name: 'Hedi',
    last_name: 'Hovert',
    user_name: 'hhoverth',
    email: 'hhoverth@patch.com',
    password: '93FBzvwwwq',
  },
  {
    id: '2d31b633-d5f5-48dd-b8c2-eef501b309b2',
    first_name: 'Barbra',
    last_name: 'Rodolfi',
    user_name: 'brodolfii',
    email: 'brodolfii@1und1.de',
    password: '8N5SJWcsWMS',
  },
  {
    id: 'fd62fdcc-119e-4460-a8a6-56da0668b005',
    first_name: 'Leigh',
    last_name: 'Breadon',
    user_name: 'lbreadonj',
    email: 'lbreadonj@rakuten.co.jp',
    password: 'JGGWKwkjr7',
  },
  {
    id: '15cbd7a4-58ab-4c79-a813-a2a46b8eff8c',
    first_name: 'Clerc',
    last_name: 'Cornfoot',
    user_name: 'ccornfootk',
    email: 'ccornfootk@t-online.de',
    password: 'DniFxEit',
  },
  {
    id: '6914a81c-f2a9-46a7-83d1-61f6cef03cde',
    first_name: 'Jecho',
    last_name: 'Skeene',
    user_name: 'jskeenel',
    email: 'jskeenel@forbes.com',
    password: 'DbSyh3F6Qg',
  },
  {
    id: 'd0bcda0a-d652-4e01-a358-f54504a41463',
    first_name: 'Simeon',
    last_name: 'Fishly',
    user_name: 'sfishlym',
    email: 'sfishlym@springer.com',
    password: '7euQUbdYgaO0',
  },
  {
    id: '6cfee5e9-4409-4ae6-8e8f-ad2df2ec2d64',
    first_name: 'Trudie',
    last_name: 'Busch',
    user_name: 'tbuschn',
    email: 'tbuschn@cargocollective.com',
    password: 'LhqBH8',
  },
  {
    id: 'ebd1a066-2d3b-43d6-a560-7be21fa8688c',
    first_name: 'Allsun',
    last_name: 'Penrice',
    user_name: 'apenriceo',
    email: 'apenriceo@dmoz.org',
    password: 'bl1OQBEZ',
  },
];

module.exports = { usersMock };
