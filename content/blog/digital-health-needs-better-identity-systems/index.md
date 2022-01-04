---
title: Digital Health Needs Better Identity Systems
date: 2021-10-15T14:17:12.028Z
slug: digital-health-identity-systems
thumbnail: nov._12_2017-rodinthinker.jpg
---
When Apple announced the Apple Watch in 2014, I was very excited about its possibilities. 

I [wrote](https://jurv.is/posts/2014/09/letters-from-9914) in one of the earliest posts on this blog:

> Looking at HealthKit that has metrics like blood pressure and sugar levels got me so excited — what if the Watch could be the device that monitors and files all these important vitals for your doctor?

However, I did not entertain the idea or work on anything tangible until ResearchKit was announced in 2015. Again, from a [blog post](https://jurv.is/posts/2015/03/researchkit-apple-watch) I wrote at the time:

> The Apple Watch is a device that sits directly on top of your skin, and in due time will be able to monitor and collect more and more data about your body. These advancements will allow doctors to conduct more accurate diagnoses, not based on data collected annually on your medical checkup or when you feel like there’s a problem; but instead, daily.
>
> The thesis was simple: sensor advancements will unlock a new dimension for clinical health data. One that existing Electronic Medical Records (EMRs) did not support but could benefit from.

## The First Stab

At the time, I was working at buUuk, a consulting firm in Singapore. The idea of an properly controlled individual health data record became all I talked about. My colleague Paul Yeoh then introduced me to one of his friends, Dr. Justin Ker, then a neurosurgeon at the Singapore General Hospital.

![](https://lh3.googleusercontent.com/ZihOWDkMRb9Oqff4add5-StHPbzrohpJOsvqhOrLysMc-MGEKOkgIxHeT80v3EymJrFqdaMe_l5cRv1M3n8SWvIGOfKeOoxIMgDuJHTPQPWZE5iqS5gPoU6BXe1q9VbNLfsmwsCj)

I presented my ideas to Dr. Ker, and it struck a chord. 

Dr. Ker’s wife was a general practitioner, and he saw how passive measurement of patient data could help her practice in several ways:

1. Augment the clinical decision with continuous measurements, as opposed to a single-incident measurement.
2. Allow the doctor to pull data about the patient ahead of time, so they would not have to spend as much time at the clinic.

So I built it. Except, there were a couple of serious obstacles.

First, not everyone owned an Apple Watch. Only nerds like myself wore them at the time. Second, most wearables at the time only supported step counting and heart rate. Those measurements alone were not very useful for a diagnosis. For my solution to work well, patients needed to both purchase specific hardware and cultivate a habit of measuring regularly. 

Even if my little R&D project worked out, there was a larger issue: who should be the custodian of the data? Insurance companies were out of the picture since primary care in Singapore was mostly paid for out of pocket, and clinics had no interest in continuously monitoring their patients since they billed per-visit. 

My idea was in trouble. The last nail in the coffin was realizing that I had only a year left before my conscription (I had to do mandatory National Service, being Singaporean). 

## No One Wants To Manage Their Health Data

Fast forward three years, the landscape had changed. Hardware sensors had improved, and that innovation was accompanied by an explosion of different storage services and data collection streams. We now have a novel and valuable source of health data sitting in the phones in our pockets, and everyone, it seemed, wanted a slice of it.

Take a look, for instance, at this diagram of patient monitoring companies:

![](https://lh6.googleusercontent.com/0AxShBfgP2v06vnrgdNtK72hkhDpzte9aZJF63xlilVo6oxqru3_FJMkwsnvpLV2oC-IUdk9vMw59BF2nSdTJ_0AU-ewTFsd94DJTTXSgdO7MUvz5t_GqGEt31biKZ4BCQnE0WBu)

So I left the army and moved to the United States for college. I began thinking about the health industry in the context of the United States.

Around this time, the United States has begun actively shifting towards something called ‘Value-Based Healthcare’. The idea behind Value-Based Healthcare was that if you could consider the full set of contributing factors to health, you could use interventions that weren’t just “oh let’s go to a doctor now”. These interventions can include eating better, exercising more, and playing Catan with your friends.  

Naturally, Value-Based Healthcare demands more health tracking. This meant collecting data like the passively measured metrics from our wearables, but also things like what we ate, how much we exercised, and whether we won all our Catan games.

A value-based world not only demands more data to be shared, but it also requires us to share them with more stakeholders for more purposes. 

However, despite health data being more private than our browser search history, individuals aren’t typically interested in managing it. Digital health companies, on the other hand, would be more than happy to do that for you. If we do not feel okay giving this to Facebook, why is it okay to give it to any provider, payer, or digital health player? 

Value-based care is a net-positive trend, because it recognizes the importance of social factors in patient outcomes. However, we need to be careful and avoid a world where "taking good care of yourself" means a complete surrender of genetic, diet, lifestyle, environmental, and health data to digital health companies.

## “But, We Have HIPAA”

Put in place in 1996, the Health Insurance Portability and Accountability Act (HIPAA) ensures companies adhere to security standards and operational measures when dealing with patient’s protected health information (PHI).

The [regulations](https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html) are fairly comprehensive and rigorous. They force providers, health plans, and billing clearinghouses to redact information that may potentially identify individuals. The regulations also ensure that information like medical records, lab reports, and hospital bills have no way of being correlated back to individuals. This process is called “de-identification.”

However, compliance of the policy has frequently given administrators a false sense of security. They mistake HIPAA compliance for securing against vulnerabilities in their system. 

For nine years in a row, healthcare organizations have led the pack in fines paid for data breaches. The average fine for a healthcare-related data breach was $6.45 million, over 65 percent higher than the averages found in all other industries ([source](https://www.ibm.com/security/data-breach)). 

Just because the government tells you to have a security policy in place doesn’t mean that you don’t also have to lock your doors. Security policy compliance should always be treated as a guideline for privacy, not a guarantee.

To improve the system, we need to identify the center of our conundrum: identity. Data breaches would not be a problem if health data records simply had no personally-attributable information both in storage and when being transmitted in flight. 

In an ideal world, all health data stored anywhere should be de-identified. Given HIPAA compliance, most health data is assumed to be de-identified. But there are often leaky intermediaries in the healthcare system. And this is by necessity: it is difficult to keep personal information de-identified when you need to consistently identify individuals between the clinics, hospitals, labs, and health insurance firms, wherever their records may be.

## The Trouble with Storage and Transmission of Identity

When it comes to data, two core primitives come into play: storage and transmission. The same primitives are used in value exchange as well. You store money with a bank in your bank account, and exchange cash for some good or service. 

So, why is a dollar worth a dollar? Well, let me save you the three hour lecture: because the Federal Reserve Bank of the United States said so! 

![](https://lh3.googleusercontent.com/nZ9cXE--AKqBG68PkkzqMr5MLQP_kVs1wrSMAemijg8XC_tAohWn5PVCfvNJ1jgQjIBe3yebGT9O_98xFc1k2fRSUjeM4lU39BgASI2tK68RV1V4VfVa_00ae09s-QsVJSFrcUTh)

When receiving a dollar, you know it is worth what it says it is from the signatures and serial numbers printed on it. It’s that simple.

Primitive as it may, cash transactions are actually both privacy preserving and relatively verifiable. The privacy preserving quality of cash is what makes it the preferred medium for drug dealers and the undocumented. Regardless of where you stand on drug lords or refugees and asylum-seekers, we can all agree that cash matters. 

*Okay Jurvis, so what the hell does this have to do with identity?*

Identity is not the same as money. Unlike cash, where each note’s value is the same as the next of the same domination, our identities are much more complex. No two pieces of identity are the same, the same way as how no two people are the same. This makes verification much harder.

Yet today, we treat identities like money. 

How do I know you are who you claim to be? Today, that work is delegated to governments or Internet companies. They become the point of trust for all identity-related transactions.

![](https://lh4.googleusercontent.com/NpCDdhPRWgIwEXv--hjw8W44sEIt71AczMC_cbXfZB9R3XSzPgq6zWqtYi84Ve6jyto4itMJrb7Ub-iBHvuU1807IR2c4AABAsBHODySR1rcyJVJx3UBKOLqLRhs1I8cpGuH2nRm)

What that means is that all transactions that involve identity are by nature not privacy-preserving. Take buying alcohol for example. When you go to the liquor store and purchase a beer, you show the cashier your ID. But do they really need to know where you live? Or, what your name is? 

## Identity and Health Data

On an average day, payers and providers do not actually need access to any specific individual’s data. In fact, for 70 to 80% of health data access, de-identified information is sufficient.

In an ideal world, all health data stored anywhere, regardless with provider or payer, should be de-identified. However, many obstacles stand in the way to achieving this end-goal.

Chiefly of which is the tricky job of consistently identifying individuals between the clinics, hospitals, labs, and health insurance their records may show up at.

However, they still keep that information, because (1) there exists a need to consistently identify individuals between the clinics, health insurance, and hospitals they show up at, and (2) there is currently no way for an individual to link a specific piece of their identity to a specific health record.

## The Story So Far

I've been tracking this space for half of the last decade now. The most convincing initial work around this was done during the "private blockchain" hype cycle.

If this is you right now, I don’t blame you. But this story is incomplete without it.

![](https://lh6.googleusercontent.com/mxdqlC_-XrgjOCYcfIxR5wV09L3j-7e9Wkhheh4tLZ4D-lHEOgJOB8hWuNvv4Y8vWTjnqjkn2-2zmVnbEGeIW7ZbheUx8Z25edpiH4Q-yy-mK_T62QYiLdm5RhVZzh7D6xCYRYaq)

Every graphic on the Internet pitching “applications of blockchains” had “Healthcare” on it. So, I got curious.

![](https://lh4.googleusercontent.com/HuoNI1JysnYvHpjkpgthvPkvW50MrMm84udcwcVvmkzzp8XoBr2X0VqTrYTIRDM5FQswSjKwPrJQkezphs4Nmh05nxv5nKpyQmBY2I2Cmg9fyNohkWCVtKThB9ZfI87BX-OYz8A3)

One of my favorite healthcare projects to-date is [MedRec](https://medrec.media.mit.edu/), an initiative started at the MIT Media Lab. The project promises to grant patients agency over managing how their health data moves between institutions and addressed all the challenges of existing EMRs:

1. It is designed for administrators to pay for stuff, not the patient nor the doctor.
2. Number of data silos growing exponentially with the number of existing workflows between hospitals, clinics, labs, and insurance companies
3. Current systems are built for fee-for-service environments and are unsuited for value-based care.

However, MedRec still has a flaw in the current design of its system. In order to verify the identity of its users, it requires them to surrender existing forms of ID like their social security number or bank account and map it to addresses on the blockchain.

## Next Steps

I really wanted to build the future of decentralized, privacy respecting, and fully interoperable health records. Its vision is so grand it is hard to ignore. Imagine being able to contextualize your healthcare visits regardless of where you are at internationally. Last I've heard, there even exists laws that make it challenging to transfer health records between states. Imagine a world where people can reassuringly share their most private information about themselves for cancer research, without fear of exposing too much.

The section above is a short list of what is possible. However, decentralized identifiers (DID), as it turns out, is really tough to build. But that's where my depth of knowledge ends. I wish to direct my efforts to realizing that. I've never worked on capacities beyond client-facing applications before, so working on DID, I think, should be interesting.
